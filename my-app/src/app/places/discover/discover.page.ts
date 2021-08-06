import { MenuController } from '@ionic/angular';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { Place } from '../offers/place.model';
import { LocationService } from 'src/app/Services/location.service';
import { CovidService } from 'src/app/Services/covid.service';
import { CookieService} from 'ngx-cookie-service'

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  location: any;
  covidObj: any = [];

  constructor(private covidService: CovidService, private cookiesService: CookieService,
    private locationService: LocationService, private placeService: PlacesService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.places;
    this.locationService.getLocation().subscribe((data) => {
      this.location = data
      this.covidService.getCovidByCountryName(this.location.country.name).subscribe(res => {
        this.covidObj = res;
        console.log("🚀 ~ file: discover.page.ts ~ line 28 ~ DiscoverPage ~ this.covidService.getCovidByCountryName ~ this.covidObj", this.covidObj)
        //save data obj to Cookies
        this.cookiesService.set('covid-data', this.covidObj[0])
      })
      console.log("🚀 ~ file: discover.page.ts ~ line 22 ~ DiscoverPage ~ this.locationService.getLocation ~ this.location", this.location)
    })
  }

  // onOpenMenu(){
  //   this.menuCtrl.toggle();
  // }

}
