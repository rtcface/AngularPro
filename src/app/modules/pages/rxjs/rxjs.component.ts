import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent  {

  constructor() { 

    // const obs$ = new Observable( observer => {
    //   let contador = 0;
    //   let intervalo = setInterval( () => {
    //     contador += 1;
    //     observer.next( contador );
    //     if ( contador === 3 ) {
    //       clearInterval( intervalo );
    //       observer.complete();
    //     }

    //     if ( contador === 2 ) {
    //       observer.error('Auxilio');
    //     }

    //   }, 1000 );
    // } );

    // obs$.subscribe(
    //   numero => console.log( 'Subs', numero ),
    //   error => console.error( 'Error en el obs', error ),
    //   () => console.log( 'El observador termino' )
    // );
    let index = 0;
    const names$ = new Observable( observer => {
      let names = ['Juan', 'Pedro', 'Maria', 'Sofia', 'Santiago', 'Andres', 'victor', 'jose'];
     
      let interval = setInterval( () => {
        index = Math.floor( Math.random() * 9 );
        observer.next( names[index] );
        if ( index === 4 ) {
          clearInterval( interval );
          observer.complete();
        }

        if ( index >= 8 ) {
          observer.error('Auxilio');
        }


      }, 1000 );


    } );

    names$.pipe( retry(1) ).subscribe(
      name => console.log( 'Subs', name ),
      error => console.error( 'Error en el obs', error ),
      () => console.log( 'El observador termino' )
      );
      
      

  
}

}
