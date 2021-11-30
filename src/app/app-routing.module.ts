import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Modules
import { ModulesRoutingModule } from './modules/modules-routing.module';



import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { NotpagefoundComponent } from './modules/pages/notpagefound/notpagefound.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'  },  
  { path: '**', component: NotpagefoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ModulesRoutingModule 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
