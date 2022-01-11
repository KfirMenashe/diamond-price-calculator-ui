import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DiamondPricing } from '../models/diamond-pricing';

@Injectable({
  providedIn: 'root'
})
export class DiamondPricingService {

  constructor(private http: HttpClient) { }

  getPricing(body: any) {
    return this.http.post<DiamondPricing>(`${environment.apiUrl}/diamond-pricing`, body);
  }
}
