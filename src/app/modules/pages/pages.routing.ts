import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageMainComponent } from './page-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';



const routes: Routes = [
    {
        path: 'dashboard',
        component: PageMainComponent,
        children: [
          { path: '' , component: DashboardComponent },
          { path: 'progress', component: ProgressComponent},
          { path: 'grafica', component: GraficaComponent},
        ]
    },   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
