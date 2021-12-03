import { Component, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-donut-grafica',
  templateUrl: './donut-grafica.component.html',
  styles: [
  ]
})
export class DonutGraficaComponent {
  
     // Doughnut
  @Input() title: string = 'Sin titulo';
  @Input() public doughnutChartLabels: Label[] = ['Inicial', 'Modificacion', 'Final'];
  @Input() public doughnutChartData: MultiDataSet = [
     [600, 455,300]
   ];
   


}
