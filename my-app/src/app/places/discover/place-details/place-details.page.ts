import { PlacesService } from './../../places.service';
import { Place } from './../../offers/place.model';
import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CovidService } from 'src/app/Services/covid.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
  place: Place;
  covidObj: any;
  constructor(private covidService: CovidService,private placeService:PlacesService,
    private router: Router,private route: ActivatedRoute, private navCtrl: NavController,
     private modalCtrl: ModalController) {
      // this.router.getCurrentNavigation().extras.state
      }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      if(!param.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      //getting object data from discover component
      this.covidObj = history.state;
      // this.place = this.placeService.getPlaceById(param.get('placeId'));
      // this.covidService.getCovidByCountryName(param.get('placeId')).subscribe(res => {
      //   this.covidObj = res[0];
      // })
    })
  }
  onBookPlace() {
    //need to be full url otherwise it will be array of route
    // this.router.navigateByUrl('/places/tabs/discover')
    //to display animation backward
    // this.navCtrl.navigateBack('/places/tabs/discover');

    //componentProps to pass data to the component
    this.modalCtrl.create({ component: CreateBookingComponent, componentProps: { selectedPlace: this.place } }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(res => {
      if(res.role === 'confirm'){
        console.log('booked')
      }
    })
  }
}
