import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;
  constructor() { }

  ngOnInit() {
  }

  get userIsAuthenticated(){
    return this._userIsAuthenticated;
  }

  onLogin(){
    this._userIsAuthenticated = true;
  }
  logout(){
    this._userIsAuthenticated = false;
  }
}
