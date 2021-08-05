import { Injectable } from '@angular/core';
import { Place } from './offers/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    {id: 'p1', title: 'title 1', description: 'This is Canada 1', imageUrl: 'https://picsum.photos/150/150', numOfCases: 3241},
    {id: 'p2', title: 'title 2', description: 'This is Canada 2', imageUrl: 'https://picsum.photos/150/150', numOfCases: 3242},
    {id: 'p3', title: 'title 3', description: 'This is Canada 3', imageUrl: 'https://picsum.photos/150/150', numOfCases: 3243},
    {id: 'p4', title: 'title 4', description: 'This is Canada 4', imageUrl: 'https://picsum.photos/150/150', numOfCases: 3244},
    {id: 'p5', title: 'title 5', description: 'This is Canada 5', imageUrl: 'https://picsum.photos/150/150', numOfCases: 3245},
  ];

  get places() {
    return [...this._places]
  }
  constructor() { }
}
