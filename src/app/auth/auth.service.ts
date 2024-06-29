import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInRequest } from './models/signin';
import { environment } from '../../environments/environment';
import { TokenResponse } from './models/token';
import { SignUpRequest } from './models/signup';
import { ActivateUserRequest } from './models/activateUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  signIn(obj: SignInRequest){
    return this._http.post<TokenResponse>(`${environment.apiUrl}/User/SignIn`, obj);
  }

  signUp(obj: SignUpRequest){
    return this._http.post<void>(`${environment.apiUrl}/User/SignUp`, obj);
  }

  activateUser(obj: ActivateUserRequest){
    return this._http.put<void>(`${environment.apiUrl}/User/ActivateUser`, obj);
  }
}
