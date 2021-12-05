import { Component, OnInit } from '@angular/core';
import { ModulesSettingsService } from '../../services/modules-settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  
 

  constructor( private _themeService: ModulesSettingsService ) {  
  }

  
  ngOnInit(): void {
   this._themeService.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this._themeService.changeTheme(theme);   
  }

  


  

}
