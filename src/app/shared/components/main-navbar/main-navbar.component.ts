import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthVariablesService } from '../../../auth/auth-variables.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.scss'
})
export class MainNavbarComponent {

  isLogged: boolean = false;
  showMenu: boolean = false;

  constructor(
    private _authV: AuthVariablesService
  ){
    this.isLogged = this._authV.isLogged;
  }

  signOut()
  {
    this._authV.signOut();
  }

  isMobile(menuBtn: HTMLButtonElement){
    if(window.getComputedStyle(menuBtn).display == 'block')
      return true;

    return false;
  }

  changeMenu()
  {
    if(!this.isMobile)
    {
      this.showMenu = true;
      return;
    }

    this.showMenu = !this.showMenu;
  }
}
