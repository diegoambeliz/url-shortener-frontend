import { Component } from '@angular/core';
import { MainNavbarComponent } from '../../../shared/components/main-navbar/main-navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [MainNavbarComponent, RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
