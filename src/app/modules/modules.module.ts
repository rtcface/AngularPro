import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { PageMainComponent } from './pages/page-main.component';

@NgModule({
  declarations: [
    NotpagefoundComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    ProgressComponent,
    GraficaComponent,
    PageMainComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ],
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    DashboardComponent,
    HeaderComponent,
    NotpagefoundComponent
  ]

})
export class ModulesModule { }
