import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageMainComponent } from './page-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const routes: Routes = [
    {
        path: 'dashboard',
        component: PageMainComponent,
        children: [
          { path: '' , component: DashboardComponent, data: {title: 'Principal'} },
          { path: 'progress', component: ProgressComponent,data: {title: 'Progreso'} },
          { path: 'grafica', component: GraficaComponent,data: {title: 'Reportes'}},
          { path: 'account-settings', component: AccountSettingsComponent ,data: {title: 'Temas'}},
          { path: 'promises', component: PromisesComponent,data: {title: 'Promesas'}},
          { path: 'rxjs', component: RxjsComponent,data: {title: 'Rxjs'}},
        ]
    },   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
