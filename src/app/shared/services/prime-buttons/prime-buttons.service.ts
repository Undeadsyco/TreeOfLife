import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Buttons } from '../../models/buttons';

@Injectable({
  providedIn: 'root'
})
export class PrimeButtonsService {
  private primeBtnRoute="http://localhost:3000/PrimeButtons";

  constructor(private http: HttpClient) { }

  getButtons(): Observable<Buttons[]>{
    return this.http.get<Buttons[]>(this.primeBtnRoute)
  }
}