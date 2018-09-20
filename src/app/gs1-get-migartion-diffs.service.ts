import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GS1UiDifferenceRowsIF } from './gs1-ui-components-classes/GS1UiDifferenceRowsIF';
@Injectable({
  providedIn: 'root'
})
export class GS1GetMigartionDiffsService {

  urlString = 'https://enigmatic-hamlet-75507.herokuapp.com';
  
  constructor(private http: HttpClient) { }
  
  getDiffRows(): Observable<GS1UiDifferenceRowsIF[]> {
    return this.http.get<GS1UiDifferenceRowsIF[]>(this.urlString + '/differences');
  }
}