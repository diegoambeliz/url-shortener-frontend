import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { MainNavbarComponent } from '../../../shared/components/main-navbar/main-navbar.component';
import { SimpleSpinnerComponent } from '../../../shared/components/simple-spinner/simple-spinner.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-email-verification-success',
  standalone: true,
  imports: [MainNavbarComponent, RouterModule, SimpleSpinnerComponent],
  templateUrl: './email-verification-success.component.html',
  styleUrl: './email-verification-success.component.scss'
})
export class EmailVerificationSuccessComponent {

  private sub: Subscription = new Subscription();

  loading: boolean = true;
  error: boolean = false;

  constructor(
    private _auth: AuthService,
    private actRoute: ActivatedRoute
  ){
    this.sub.add(
      this.actRoute.params.subscribe({
        next: (res) => {
          if(res['token'])
            this.activateUser(res['token']);
        }
      })
    )
  }

  activateUser(token: string){
    this._auth.activateUser({code: token}).subscribe({
      next: () => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = true;
      }
    })
  }
}
