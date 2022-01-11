import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Diamond } from '../models/diamond';

@Injectable({
  providedIn: 'root'
})
export class SimilarDiamondsService {

  constructor(private http: HttpClient) { }

  getSimilarDiamonds(shapeId: number | undefined, colorId: number | undefined, clarityId: number | undefined) {
    if (!shapeId || !colorId || !clarityId)
      throw Error('Bad parameters');

    return this.http.get<Diamond[]>(`${environment.apiUrl}/diamond/similar?shapeId=${shapeId}&&colorId=${colorId}&&clarityId=${clarityId}`);
  }
}
