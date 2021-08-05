import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  userIsAuthenticated = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onLogin(){
    this.authService.onLogin()
  }
  logout(){
    this.userIsAuthenticated = false;
  }

}
