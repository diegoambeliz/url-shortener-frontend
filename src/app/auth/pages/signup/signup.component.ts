import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { SignUpRequest } from '../../models/signup';
import { Router } from '@angular/router';
import { MainNavbarComponent } from '../../../shared/components/main-navbar/main-navbar.component';
import { AuthVariablesService } from '../../auth-variables.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, MainNavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  obj: SignUpRequest = new SignUpRequest();

  constructor(
    private _auth: AuthService,
    private _authV: AuthVariablesService,
    private router: Router
  ){}

  signUp(f: NgForm){
    this._auth.signUp(this.obj).subscribe({
      next: () => {
        this._authV.$showEmailVerificationPage = true;
        this.router.navigate(['/email-verification'])
      }
    })
  }
}
