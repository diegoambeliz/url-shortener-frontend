import { Component } from '@angular/core';
import { SignInRequest } from '../../models/signin';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { AuthVariablesService } from '../../auth-variables.service';
import { MainNavbarComponent } from '../../../shared/components/main-navbar/main-navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, MainNavbarComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  obj: SignInRequest = new SignInRequest();

  constructor(
    private _auth: AuthService,
    private _authV: AuthVariablesService,
    private router: Router
  ){}

  signIn(f: NgForm){
    this._auth.signIn(this.obj).subscribe({
      next: (req) => {
        this._authV.authInfo = req;
        window.location.href = '/';
      }
    })
  }
}
