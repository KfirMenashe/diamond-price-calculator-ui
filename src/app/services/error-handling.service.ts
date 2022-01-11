import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }

  handle(error: any) {
    if (error.error instanceof ErrorEvent) {
      alert(`Error: ${error.error.message}`);
    } else {
      alert(`Error: ${error.message}`);
    }
    return of(null);
  }
}
