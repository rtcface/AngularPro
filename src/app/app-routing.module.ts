import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';
import { GraficaComponent } from './modules/pages/grafica/grafica.component';
import { NotpagefoundComponent } from './modules/pages/notpagefound/notpagefound.component';
import { PageMainComponent } from './modules/pages/page-main.component';
import { ProgressComponent } from './modules/pages/progress/progress.component';

const routes: Routes = [
  { 
    path: '',
    component: PageMainComponent,
    children: [
      { path: '' , pathMatch: 'full', redirectTo: '/dashboard'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent},
      { path: 'grafica', component: GraficaComponent},
    ]
  },
  
  
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  
  
  { path: '**', component: NotpagefoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
