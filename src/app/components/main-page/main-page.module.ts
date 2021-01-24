import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http"

import { HeaderComponent } from './main-component/header/header.component';
import { RootsComponent } from './main-component/roots/roots.component';
import { FavoritesComponent } from './main-component/favorites/favorites.component';
import { MainComponentComponent } from './main-component/main-component.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    RootsComponent, 
    FavoritesComponent, 
    MainComponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent, 
    RootsComponent, 
    FavoritesComponent, 
    MainComponentComponent
  ]
})
export class MainPageModule { }
