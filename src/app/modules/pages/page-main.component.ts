import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styles: [
  ]
})
export class PageMainComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');
  

  ngOnInit(): void {
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', url);
    // ./assets/css/colors/green-dark.css
  }

}
