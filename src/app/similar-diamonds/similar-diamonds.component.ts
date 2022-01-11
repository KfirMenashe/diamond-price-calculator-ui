import { Component, Input, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Diamond } from '../models/diamond';
import { ErrorHandlingService } from '../services/error-handling.service';
import { SimilarDiamondsService } from '../services/similar-diamonds.service';


@Component({
  selector: 'app-similar-diamonds',
  templateUrl: './similar-diamonds.component.html',
  styleUrls: ['./similar-diamonds.component.css']
})
export class SimilarDiamondsComponent implements OnInit {

  @Input('shapeid') shapeId: number | undefined;
  @Input('colorid') colorId: number | undefined;
  @Input('clarityid') clarityId: number | undefined;

  similarDiamonds: Diamond[] = [];

  constructor(
    private readonly similarDiamondsService: SimilarDiamondsService,
    private readonly errorHandlingService: ErrorHandlingService) { }

  ngOnInit(): void {
    this.getSimilarDiamonds();
  }

  getSimilarDiamonds() {
    this.similarDiamondsService
      .getSimilarDiamonds(this.shapeId, this.colorId, this.clarityId)
      .pipe(catchError(this.errorHandlingService.handle))
      .subscribe(response => {
        this.similarDiamonds = response as Diamond[];
      })
  }

}


