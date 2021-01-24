import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Buttons } from '../../models/buttons';

@Injectable({
  providedIn: 'root'
})
export class EubacteriaService {
  private eubacteriaUrl = "http://localhost:3000/Eubacteria";
  private eubacteriaSecondUrl = "http://localhost:3000/Eubacteria-2";

  constructor(private http: HttpClient) { }

  getButtons(): Observable<Buttons[]>{
    return this.http.get<Buttons[]>(this.eubacteriaUrl);
  }
  getSecondButtons(): Observable<Buttons[]>{
    return this.http.get<Buttons[]>(this.eubacteriaSecondUrl);
  }
}
