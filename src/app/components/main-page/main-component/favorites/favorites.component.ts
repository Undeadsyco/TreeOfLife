import { Component, OnInit } from '@angular/core';

import { Buttons } from 'src/app/shared/models/buttons';
import { DisplayedContent } from 'src/app/shared/models/displayed-content';

import { ContentService } from 'src/app/shared/services/content/content.service';
import { PrimeButtonsService } from 'src/app/shared/services/prime-buttons/prime-buttons.service';
import { SecondaryButtonsService } from 'src/app/shared/services/secondary-buttons/secondary-buttons.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public primeButtons: Buttons[];
  public secondaryButtons: Buttons[];
  public content: DisplayedContent;

  getButtons(): void{
    this.primeService.getButtons().subscribe(pButtons=>(this.primeButtons=pButtons))
  }
  getInvertebrateButtons():void{
    this.secondaryService.getInvertebrateButtons().subscribe(sButtons=>(this.secondaryButtons=sButtons));
  }
  getInsectContent(): void{
    this.contentService.getInsectContent().subscribe(iContent =>(this.content=iContent))
  }
  

  getSecondaryButtons(id): void{
    switch(id){
      case "primeInvertebratesButton":
        this.secondaryService.getInvertebrateButtons().subscribe(sButtons=>(this.secondaryButtons=sButtons));
        break;
      case "primeFishButton":
        this.secondaryService.getFishButtons().subscribe(sButtons=>(this.secondaryButtons=sButtons));
        break;
      case "primeAmphibiansButton":
        this.secondaryService.getAmphibianButtons().subscribe(sButtons=>(this.secondaryButtons=sButtons));
        break;
      case "primeReptilesButton":
        this.secondaryService.getReptileButtons().subscribe(sButtons=>(this.secondaryButtons=sButtons));
        break;
      case "primeBirdsButton":
        this.secondaryService.getBirdButtons().subscribe(sButtons=>(this.secondaryButtons=sButtons));
        break;
      case "primeMammalsButton":
        this.secondaryService.getMammalButtons().subscribe(sButtons=>(this.secondaryButtons=sButtons));
        break;
    }
  }

  getContent(secondId): void{
    switch(secondId){
      case "insectButton":
        this.contentService.getInsectContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "arachnidButton":
        this.contentService.getArachnidContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "molluscaButton":
        this.contentService.getMolluscaContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "crustaceanButton":
        this.contentService.getCrustaceanContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "salmonButton":
        this.contentService.getSalmonContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "sharkButton":
        this.contentService.getSharksContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "surgeonfishButton":
        this.contentService.getSurgeonContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "tangButton":
        this.contentService.getTangContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "anuraButton":
        this.contentService.getAnuraContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "cuadataButton":
        this.contentService.getCaudataContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "gymnophionaButton":
        this.contentService.getGymnophionaContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "tadpoleButton":
        this.contentService.getTadpoleContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "squamataButton":
        this.contentService.getSquamataContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "archosauriformesButton":
        this.contentService.getArchosauriformesContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "tortoiseButton":
        this.contentService.getTortoiseContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "uromastyxButton":
        this.contentService.getUromastyxContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "accipitridaeButton":
        this.contentService.getAccipitridaeContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "falconidaeButton":
        this.contentService.getFalconidaeContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "gooseButton":
        this.contentService.getGooseContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "parrotButton":
        this.contentService.getParrotContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "feliformiaButton":
        this.contentService.getFeliformiaContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "caniformiaButton":
        this.contentService.getCaniformiaContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "perissodactylaButton":
        this.contentService.getPerissodactylaContent().subscribe(nContent=>(this.content=nContent));
        break;
      case "artiodactylaButton":
        this.contentService.getArtiodactylaContent().subscribe(nContent=>(this.content=nContent));
        break;
    }
  }
  
  constructor(
    private primeService: PrimeButtonsService,
    private secondaryService: SecondaryButtonsService,
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.getButtons();
    this.getInvertebrateButtons();
    this.getInsectContent();
  }
}

