import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private auth: AuthService, private router: Router) {}

  onLogout(){
    this.auth.logout();
    this.router.navigateByUrl('/auth');
  }

}
