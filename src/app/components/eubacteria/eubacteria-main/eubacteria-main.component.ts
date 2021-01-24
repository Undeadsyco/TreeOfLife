import { Component, OnInit } from '@angular/core';

import { Buttons } from 'src/app/shared/models/buttons';

import { EubacteriaService } from 'src/app/shared/services/eubacteria/eubacteria.service';

@Component({
  selector: 'app-eubacteria-main',
  templateUrl: './eubacteria-main.component.html',
  styleUrls: ['./eubacteria-main.component.css']
})
export class EubacteriaMainComponent implements OnInit {
  public eubacteriaBtns: Buttons[];
  public eubacteriaSecondBtns: Buttons[];

  getButtons(): void{
    this.eubacteriaService.getButtons().subscribe(eButtons=>(this.eubacteriaBtns=eButtons))
  }
  getSecondButtons():void{
    this.eubacteriaService.getSecondButtons().subscribe(eSButtons=>(this.eubacteriaSecondBtns=eSButtons))
  }

  constructor(private eubacteriaService: EubacteriaService) { }

  ngOnInit(): void {
    this.getButtons();
    this.getSecondButtons();
  }

}
