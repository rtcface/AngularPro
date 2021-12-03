import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent
 {
   
  labels: string[] = ['Inicial', 'Modificacion', 'Final'];
  data: any[] = [10, 60, 150];

  labels1: string[] = ['Prueba-Inicial', 'Prueba-Modificacion', 'Prueba-Final'];
  data1: any[] = [250, 150, 25];

  labels2: string[] = ['Tlaxcala ', 'Modificacion', 'Final'];
  data2: any[] = [380, 80, 150];

  labels3: string[] = ['Tlaxcala ', 'Modificacion', 'Final'];
  data3: any[] = [380, 80, 150];

  }
