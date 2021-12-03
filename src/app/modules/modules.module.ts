import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ModulesRoutingModule } from './modules-routing.module';
import { PageModule } from './pages/page.module';
import { SharedModule } from './shared/shared.module';

import { PageMainComponent } from './pages/page-main.component';


@NgModule({
  declarations: [
    PageMainComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    PageModule,
    SharedModule
  ],
  exports: [
   
  ]

})
export class ModulesModule { }
