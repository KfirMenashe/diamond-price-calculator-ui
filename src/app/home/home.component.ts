import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError } from 'rxjs/operators';
import { Clarity } from '../models/clarity';
import { Color } from '../models/color';
import { DiamondCharacteristics } from '../models/diamond-characteristics';
import { DiamondPricing } from '../models/diamond-pricing';
import { Shape } from '../models/shape';
import { DiamondCharacteristicsService } from '../services/diamond-characteristics.service';
import { ErrorHandlingService } from '../services/error-handling.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // this needs to be loaded from config
  minCarat = 0.01;
  maxCarat = 100; // I know that the biggest is around 3000c :) but probably not our typical customer 

  selectedCarat = 1.00;
  selectedShape: Shape = Shape.default;
  selectedColor: Color = Color.default;
  selectedClarity: Clarity = Clarity.default;
  diamondCharacteristics: DiamondCharacteristics | null = null;
  diamondPricing: DiamondPricing | null = null;
  showPrice = false;
  loadingMessage = 'Loading...';

  constructor(
    private diamondCharacteristicsService: DiamondCharacteristicsService,
    private errorHandingService: ErrorHandlingService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDiamondCharacteristics();
  }

  getDiamondCharacteristics() {
    this.loadingMessage = 'Preparing...';
    this.spinner.show();

    this.diamondCharacteristicsService
      .getAll()
      .pipe(catchError(this.errorHandingService.handle))
      .subscribe(response => {
        this.spinner.hide();
        this.diamondCharacteristics = DiamondCharacteristics.create(response);
        this.diamondCharacteristicsService.addDefaults(this.diamondCharacteristics);
      })
  }

  getDiamondPricing(): void {

    this.router.navigate(['/pricing'], {
      queryParams: {
        carat: this.selectedCarat, 
        shapeid: this.selectedShape.id, 
        colorid: this.selectedColor.id, 
        clarityid: this.selectedClarity.id
      }
    });

  }

  
  get noDefaultsSelected() {
    return this.selectedShape !== Shape.default
      && this.selectedColor !== Color.default
      && this.selectedClarity !== Clarity.default;
  }

}


