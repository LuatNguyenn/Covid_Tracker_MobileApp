import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  userIsAuthenticated = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLogin(){
    this.authService.onLogin();
    this.router.navigateByUrl('/places/tabs/discover')
  }
  logout(){
    this.userIsAuthenticated = false;
  }

}
