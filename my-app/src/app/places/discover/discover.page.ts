import { MenuController } from '@ionic/angular';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { Place } from '../offers/place.model';
import { LocationService } from 'src/app/Services/location.service';
import { CovidService } from 'src/app/Services/covid.service';
import { CookieService } from 'ngx-cookie-service'
import { Config, Columns, DefaultConfig } from 'ngx-easy-table';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  location: any;
  covidObj: any = [];


  public configuration: Config;
  public columns: Columns[];

  public data = [{
    phone: '+1 (934) 551-2224',
    age: 20,
    address: { street: 'North street', number: 12 },
    company: 'ZILLANET',
    name: 'Valentine Webb',
    isActive: false,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }];

  constructor(private covidService: CovidService, private cookiesService: CookieService,
    private locationService: LocationService, private placeService: PlacesService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.places;
    this.locationService.getLocation().subscribe((data) => {
      this.location = data
      this.covidService.getCovidByCountryName(this.location.country.name).subscribe(res => {
        this.covidObj = res[0];
      })
    })
  }

  }

  // onOpenMenu(){
  //   this.menuCtrl.toggle();
  // }


