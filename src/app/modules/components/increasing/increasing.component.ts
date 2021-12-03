import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styles: [
  ]
})
export class IncreasingComponent implements OnInit {
  
  ngOnInit(): void {
      this.btnClass = `btn ${this.btnClass}`;  
  }

  @Input('valor') progreso: number = 20; // renamed to progreso
  //@Input() progreso: number = 2;
  @Input () btnClass: string = 'btn-primary';


  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  get getProgreso() {
    return `${this.progreso}%`;
  }

  cambiarProgreso(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.cambioValor.emit(100);
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.cambioValor.emit(0);
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }

  onChanges(newValue: number) {

    if(newValue >= 100) {
      this.progreso = 100;
    }
    else if(newValue <= 0) {
      this.progreso = 0;
    }
    else {
      this.progreso = newValue;
    }

    this.cambioValor.emit(this.progreso); 
  }


}
