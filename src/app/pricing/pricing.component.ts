import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError } from 'rxjs';
import { DiamondPricing } from '../models/diamond-pricing';
import { DiamondPricingService } from '../services/diamond-pricing.service';
import { ErrorHandlingService } from '../services/error-handling.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  carat = 1.00;
  shapeId = -1;
  colorId = -1;
  clarityId = -1;
  showPrice = false;
  loadingMessage = 'Loading...';

  diamondPricing: DiamondPricing | null = null;
  constructor(
    private spinner: NgxSpinnerService,
    private diamondPricingService: DiamondPricingService,
    private errorHandingService: ErrorHandlingService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.carat = parseFloat(this.route.snapshot.queryParamMap.get('carat') as string);
    this.shapeId = parseInt(this.route.snapshot.queryParamMap.get('shapeid') as string);
    this.colorId = parseInt(this.route.snapshot.queryParamMap.get('colorid') as string);
    this.clarityId = parseInt(this.route.snapshot.queryParamMap.get('clarityid') as string);

    this.getDiamondPricing();
  }

  getDiamondPricing(): void {
    this.loadingMessage = 'Calculating...';
    this.spinner.show();
    this.diamondPricingService
      .getPricing({ carat: this.carat, shapeId: this.shapeId, colorId: this.colorId, clarityId: this.clarityId })
      .pipe(catchError(this.errorHandingService.handle))
      .subscribe(response => {
        this.showPrice = true;
        this.spinner.hide();
        this.diamondPricing = Object.assign(new DiamondPricing(), response);

      })
  }

}
