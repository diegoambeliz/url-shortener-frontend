import { Component } from '@angular/core';
import { MainNavbarComponent } from '../../../shared/components/main-navbar/main-navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-not-logged',
  standalone: true,
  imports: [MainNavbarComponent, RouterModule],
  templateUrl: './home-not-logged.component.html',
  styleUrl: './home-not-logged.component.scss'
})
export class HomeNotLoggedComponent {

}
