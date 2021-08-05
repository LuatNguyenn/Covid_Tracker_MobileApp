import { Injectable } from '@angular/core';
import { Place } from './offers/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    {placeId: `p1`, title: `title 1`, description: `This is Canada 1`, imageUrl: `https://picsum.photos/id/10/150/150`, numOfCases: 3241},
    {placeId: `p2`, title: `title 2`, description: `This is Canada 2`, imageUrl: `https://picsum.photos/id/20/150/150`, numOfCases: 3242},
    {placeId: `p3`, title: `title 3`, description: `This is Canada 3`, imageUrl: `https://picsum.photos/id/30/150/150`, numOfCases: 3243},
    {placeId: `p4`, title: `title 4`, description: `This is Canada 4`, imageUrl: `https://picsum.photos/id/40/150/150`, numOfCases: 3244},
    {placeId: `p5`, title: `title 5`, description: `This is Canada 5`, imageUrl: `https://picsum.photos/id/50/150/150`, numOfCases: 3245},
  ];

  get places() {
    return [...this._places]
  }
  constructor() { }
}
