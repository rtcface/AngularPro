import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { ProgressComponent } from './progress/progress.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';



@NgModule({
  declarations: [
    NotpagefoundComponent,
    ProgressComponent,
    GraficaComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
  ],
  exports: [
    NotpagefoundComponent,
    ProgressComponent,
    GraficaComponent,
    DashboardComponent
  ],



})
export class PageModule { }
