import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EubacteriaMainComponent } from './eubacteria-main/eubacteria-main.component';
import { AcidobacteriaComponent } from './eubacteria-main/eubacteria-pages/acidobacteria/acidobacteria.component';
import { ActinobacteriaComponent } from './eubacteria-main/eubacteria-pages/actinobacteria/actinobacteria.component';
import { AquificaeComponent } from './eubacteria-main/eubacteria-pages/aquificae/aquificae.component';
import { BacteroidetesComponent } from './eubacteria-main/eubacteria-pages/bacteroidetes/bacteroidetes.component';



@NgModule({
  declarations: [
    EubacteriaMainComponent, 
    AcidobacteriaComponent, 
    ActinobacteriaComponent, 
    AquificaeComponent, 
    BacteroidetesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EubacteriaModule { }
