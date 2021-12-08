import { Component, OnDestroy } from '@angular/core';

import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy  {
  
  public intervalSubs: Subscription;
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
    
    // this.retornaObservable().pipe( retry(1) ).subscribe(
    //   name => console.log( 'Subs', name ),
    //   error => console.error( 'Error en el obs', error ),
    //   () => console.log( 'El observador termino' )
    //   );  
   this.intervalSubs= this.retornaIntervalo()
      .subscribe( console.log );
  
}
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
  

retornaIntervalo(): Observable<number> {
 return interval(100)
          .pipe( 
            map( valor => valor + 1 ),
            filter( valor => ( valor % 2 === 0 ) ),
            //take(15),            
            );
}  

retornaObservable(): Observable<string> {
  let index = 0;

    return new Observable( observer => {
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

    

}

}
