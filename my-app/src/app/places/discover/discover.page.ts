import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { Place } from '../offers/place.model';
import { LocationService } from 'src/app/Services/location.service';
import { CovidService } from 'src/app/Services/covid.service';
import { CookieService } from 'ngx-cookie-service'
import { Covid } from 'src/app/Models';
// import { Config, Columns, DefaultConfig } from 'ngx-easy-table';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  location: any;
  covidObj: any;

  covidCountryList: any[] = [];
  countryList: string[] = ['india', 'usa', 'vietnam', 'brazil', 'japan'];


  constructor(private covidService: CovidService, private cookiesService: CookieService, private route: Router
   , private locationService: LocationService, private placeService: PlacesService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.places;
    this.locationService.getLocation().subscribe((data) => {
      this.location = data
      this.covidService.getCovidByCountryName2(this.location.country.name).subscribe(res => {
        this.covidObj = res.latest_stat_by_country[0];
      })
    })
    this.getCovidByContryNameVer2();

  }
  getCovidByContryNameVer2() {
    this.countryList.forEach((country, index) => {
      this.covidService.getCovidByCountryName2(country).subscribe((res:any) => {
        if(res.latest_stat_by_country[0].new_cases == null || res.latest_stat_by_country[0].new_cases == ''){
          res.latest_stat_by_country[0].new_cases = ''
        }
        else{
          res.latest_stat_by_country[0].new_cases = '+' + res.latest_stat_by_country[0].new_cases
        }
        this.covidCountryList.push(res.latest_stat_by_country[0]);
      })
    })
  }

  navigateToDetails(c){
    this.cookiesService.deleteAll('country');
    console.log(c)
    //need to convert to string before saving to cookie
    this.cookiesService.set('country', JSON.stringify(c))
    this.route.navigate(['/', 'places', 'tabs', 'discover', c.country_name])
  }
  navigateToDetailsLocation(){
    console.log(this.location.country_name)
    this.cookiesService.set('country', JSON.stringify(this.covidObj))
    this.route.navigate(['/', 'places', 'tabs', 'discover', this.covidObj.country_name])
  }

}

  // onOpenMenu(){
  //   this.menuCtrl.toggle();
  // }


