import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { Place } from '../offers/place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.places;
    console.log(this.loadedPlaces)
  }

}
