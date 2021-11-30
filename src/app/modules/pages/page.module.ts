import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { ProgressComponent } from './progress/progress.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';



@NgModule({
  declarations: [
    NotpagefoundComponent,
    ProgressComponent,
    GraficaComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotpagefoundComponent,
    ProgressComponent,
    GraficaComponent,
    DashboardComponent
  ],



})
export class PageModule { }
