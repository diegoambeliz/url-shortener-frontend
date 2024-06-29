import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MainNavbarComponent } from '../../../shared/components/main-navbar/main-navbar.component';
import { AuthVariablesService } from '../../auth-variables.service';

@Component({
  selector: 'app-email-verification',
  standalone: true,
  imports: [CommonModule, RouterModule, MainNavbarComponent],
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.scss',
})
export class EmailVerificationComponent implements OnInit {
  constructor(private _authV: AuthVariablesService, private router: Router) {}

  ngOnInit(): void {
    if (!this._authV.$showEmailVerificationPage) {
      this.router.navigate(["/"])
      return;
    }

    this._authV.$showEmailVerificationPage = false;
  }
}
