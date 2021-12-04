import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModulesSettingsService {
  public linkTheme = document.querySelector('#theme');
  constructor() {
    console.log("ModulesSettingsService");
   }


   changeTheme(theme: string) {

    const url = `assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);

    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
    
  }


  checkCurrentTheme() {    
    
       const links = document.querySelectorAll('.selector');

       links.forEach(element => {
       element.classList.remove('working');
 
       const btn = element.getAttribute('data-theme');
       const btnThemeUrl = `assets/css/colors/${btn}.css`;
       const currentThemeUrl = this.linkTheme?.getAttribute('href');
 
       if (btnThemeUrl === currentThemeUrl) {
         element.classList.add('working');
       }
 
     });
   }
}
