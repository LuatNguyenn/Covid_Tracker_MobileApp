import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }
  onBookPlace(){
    //need to be full url otherwise it will be array of route
    // this.router.navigateByUrl('/places/tabs/discover')
    //to display animation backward
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
