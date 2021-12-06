import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {   
    this.getUsers().then( users => console.log(users)); 
    // const promesa = new Promise<void>( (resolve, reject) => {
    //   let contador = 0;
    //   const intervalo = setInterval( () => {
    //     contador += 1;
    //     console.log(contador);
    //     if (contador === 3) {
    //       resolve();
    //       clearInterval(intervalo);
    //     }
    //   }, 1000);
    // }
    // );
  }


  getUsers(): Promise<any> {
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => resolve(body.data) );
    });

    

  }
}

  




