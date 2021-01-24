import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { DisplayedContent } from '../../models/displayed-content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private insectUrl: string ="http://localhost:3000/InsectContent";
  private arachnidUrl: string ="http://localhost:3000/ArachnidContent";
  private molluscaUrl: string ="http://localhost:3000/MolluscaContent";
  private crustaceanUrl: string ="http://localhost:3000/CrustaceanContent";
  getInsectContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.insectUrl);
  }
  getArachnidContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.arachnidUrl);
  }
  getMolluscaContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.molluscaUrl)
  }
  getCrustaceanContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.crustaceanUrl)
  }

  private salmonUrl: string ="http://localhost:3000/SalmonContent";
  private sharksUrl: string ="http://localhost:3000/SharksContent";
  private surgeonUrl: string= "http://localhost:3000/SurgeonfishContent";
  private tangUrl: string = "http://localhost:3000/TangContent";
  getSalmonContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.salmonUrl)
  }
  getSharksContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.sharksUrl)
  }
  getSurgeonContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.surgeonUrl)
  }
  getTangContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.tangUrl)
  }

  private anuraUrl: string = "http://localhost:3000/AnuraContent";
  private caudataUrl: string = "http://localhost:3000/CaudataContent";
  private gymnophionaUrl: string = "http://localhost:3000/GymnophionaContent";
  private tadpoleUrl: string = "http://localhost:3000/TadpoleContent";
  getAnuraContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.anuraUrl)
  }
  getCaudataContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.caudataUrl)
  }
  getGymnophionaContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.gymnophionaUrl)
  }
  getTadpoleContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.tadpoleUrl)
  }

  private squamataUrl: string = "http://localhost:3000/SquamataContent";
  private archosauriformesUrl: string = "http://localhost:3000/ArchosauriformesContent";
  private tortoiseUrl: string = "http://localhost:3000/TortoiseContent";
  private uromastyxUrl: string = "http://localhost:3000/UromastyxContent";
  getSquamataContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.squamataUrl)
  }
  getArchosauriformesContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.archosauriformesUrl)
  }
  getTortoiseContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.tortoiseUrl)
  }
  getUromastyxContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.uromastyxUrl)
  }
  
  private accipitridaeUrl: string = "http://localhost:3000/AccipitridaeContent";
  private falconidaeUrl: string = "http://localhost:3000/FalconidaeContent";
  private gooseeUrl: string = "http://localhost:3000/GooseContent";
  private parroteUrl: string = "http://localhost:3000/ParrotContent";
  getAccipitridaeContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.accipitridaeUrl)
  }
  getFalconidaeContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.falconidaeUrl)
  }
  getGooseContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.gooseeUrl)
  }
  getParrotContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.parroteUrl)
  }

  private feliformiaeUrl: string = "http://localhost:3000/FeliformiaContent";
  private caniformiaeUrl: string = "http://localhost:3000/CaniformiaContent";
  private perissodactylaeUrl: string = "http://localhost:3000/PerissodactylaContent";
  private artiodactylaeUrl: string = "http://localhost:3000/ArtiodactylaContent";
  getFeliformiaContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.feliformiaeUrl)
  }
  getCaniformiaContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.caniformiaeUrl)
  }
  getPerissodactylaContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.perissodactylaeUrl)
  }
  getArtiodactylaContent(): Observable<DisplayedContent>{
    return this.http.get<DisplayedContent>(this.artiodactylaeUrl)
  }

  constructor(private http: HttpClient) { }
}
