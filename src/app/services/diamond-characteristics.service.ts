import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clarity } from '../models/clarity';
import { Color } from '../models/color';
import { DiamondCharacteristics } from '../models/diamond-characteristics';
import { Shape } from '../models/shape';

@Injectable({
  providedIn: 'root'
})
export class DiamondCharacteristicsService {
  addDefaults(diamondCharacteristics: DiamondCharacteristics) {
    diamondCharacteristics?.shapes?.push(Shape.default);
    diamondCharacteristics?.colors?.push(Color.default);
    diamondCharacteristics?.clarities?.push(Clarity.default);
    //console.log(diamondCharacteristics);
  }

  constructor(private http: HttpClient) {

  }

  getAll() {
    return this.http.get<DiamondCharacteristics>(`${environment.apiUrl}/diamond-characteristics`);
  }


}
