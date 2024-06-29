import { Injectable } from '@angular/core';
import { TokenResponse } from './models/token';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthVariablesService {

  private _$showEmailVerificationPage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  public get $showEmailVerificationPage(): boolean {
    return this._$showEmailVerificationPage.getValue();
  }
  public set $showEmailVerificationPage(value: boolean) {
    this._$showEmailVerificationPage.next(value);
  }

  public get isLogged(): boolean {
    return this.authInfo != null;
  }

  public set authInfo(v : TokenResponse) {
    if(!v) return;

    const str = JSON.stringify(v);

    localStorage.setItem("tkn", str);
  }

  public get authInfo() : TokenResponse {
    const str = localStorage.getItem("tkn");

    return JSON.parse(str!) as TokenResponse;
  }

  constructor() { }

  signOut(){
    localStorage.removeItem("tkn");
    window.location.href = "/";
  }
}
