import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreasingComponent } from './increasing/increasing.component';
import { FormsModule } from '@angular/forms';
import { DonutGraficaComponent } from './donut-grafica/donut-grafica.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncreasingComponent,
    DonutGraficaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    IncreasingComponent,
    DonutGraficaComponent
  ]
})
export class ComponentsModule { }
