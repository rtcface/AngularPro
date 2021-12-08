import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string = '';
  public titleSubs$: Subscription;

  constructor( private _router: Router ) {
    this.titleSubs$= this.getDataRoute()
                      .subscribe( ({title}) => { 
                        this.title=title;
                        document.title = `Csip - ${title}`;
                      } );  
   }
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

   getDataRoute() {
   return this._router.events
    .pipe( 
      filter ( event => event instanceof ActivationEnd),
      filter((event: any) => event.snapshot.firstChild === null),
      filter(event => event.snapshot.data.title !== undefined),
      map( (event: any) => event.snapshot.data)
      );  
  }

}
