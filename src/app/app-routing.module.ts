import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchaeaMainComponent } from './components/archaea/archaea-main/archaea-main.component';

import { EubacteriaMainComponent } from './components/eubacteria/eubacteria-main/eubacteria-main.component';
import { EukaryotesMainComponent } from './components/eukaryotes/eukaryotes-main/eukaryotes-main.component';
import { MainComponentComponent } from './components/main-page/main-component/main-component.component';

const routes: Routes = [
  {path: "", redirectTo: "main-page", pathMatch: "full"},
  {path: "main-page", component: MainComponentComponent},
  {path: "eubacteria", component: EubacteriaMainComponent},
  {path: "eukaryotes", component: EukaryotesMainComponent},
  {path: "archaea", component: ArchaeaMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
