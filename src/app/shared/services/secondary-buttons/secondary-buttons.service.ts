import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Buttons } from '../../models/buttons';

@Injectable({
  providedIn: 'root'
})
export class SecondaryButtonsService {
  private invertebrateUrl: string = "http://localhost:3000/InvertebrateButtons";
  private fishUrl: string = "http://localhost:3000/FishButtons";;
  private amphibiansUrl: string = "http://localhost:3000/AmphibianButtons";
  private reptilesUrl: string = "http://localhost:3000/ReptileButtons";
  private birdUrl: string = "http://localhost:3000/BirdButtons";
  private mammalUrl: string = "http://localhost:3000/MammalButtons";

  constructor(private http: HttpClient) { }

  getInvertebrateButtons(): Observable<Buttons[]>{
    return this.http.get<Buttons[]>(this.invertebrateUrl)
  }
  getFishButtons(): Observable<Buttons[]>{
    return this.http.get<Buttons[]>(this.fishUrl)
  }
  getAmphibianButtons(): Observable<Buttons[]>{
    return this.http.get<Buttons[]>(this.amphibiansUrl)
  }
  getReptileButtons(): Observable<Buttons[]>{
    return this.http.get<Buttons[]>(this.reptilesUrl)
  }
  getBirdButtons(): Observable<Buttons[]>{
    return this.http.get<Buttons[]>(this.birdUrl)
  }
  getMammalButtons(): Observable<Buttons[]>{
    return this.http.get<Buttons[]>(this.mammalUrl)
  }
}
