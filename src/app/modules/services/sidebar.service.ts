import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Principal', url: '/' },
        { title: 'Barras de progreso', url: 'progress' },
        { title: 'Graficas', url: 'grafica' },
      ]
    },
    {
      title: 'otra',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Principal', url: '/' },
        { title: 'Barras de progreso', url: 'progress' },
        { title: 'Graficas', url: 'grafica' },
      ]
    }];

  public getMenu() {
    return this.menu;
  }
}
