import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
// Modules
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
