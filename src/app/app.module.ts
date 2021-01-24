import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './components/main-page/main-page.module';
import { NavComponent } from './shared/comopnents/nav/nav/nav.component';
import { FooterComponent } from './shared/comopnents/footer/footer/footer.component';
import { ArchaeaModule } from './components/archaea/archaea.module';
import { EubacteriaModule } from './components/eubacteria/eubacteria.module';
import { EukaryotesModule } from './components/eukaryotes/eukaryotes.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [BrowserModule,AppRoutingModule,MainPageModule,EubacteriaModule,EukaryotesModule,
    ArchaeaModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
