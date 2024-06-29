import { Routes } from '@angular/router';
import { HomeComponent } from './home/pages/home/home.component';
import { HomeNotLoggedComponent } from './home/pages/home-not-logged/home-not-logged.component';
import { SigninComponent } from './auth/pages/signin/signin.component';
import { SignupComponent } from './auth/pages/signup/signup.component';
import { EmailVerificationComponent } from './auth/pages/email-verification/email-verification.component';
import { EmailVerificationSuccessComponent } from './auth/pages/email-verification-success/email-verification-success.component';
import { authGuard, authGuardNotLogged } from './auth/guards/auth.guard';
import { RedirectLinkComponent } from './redirect-link/pages/redirect-link/redirect-link.component';
import { NotFoundComponent } from './redirect-link/pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeNotLoggedComponent,
        canActivate: [authGuard]
    },
    {
        path: 'dashboard',
        component: HomeComponent,
        canActivate: [authGuardNotLogged]
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'email-verification',
        component: EmailVerificationComponent
    },
    {
        path: 'verification/:token',
        component: EmailVerificationSuccessComponent
    },
    {
        path: 'l/:shortLink',
        component: RedirectLinkComponent
    },
    {
        path: 'invalid-link',
        component: NotFoundComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
