import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locationAPI: string = 'https://ip-geo-location.p.rapidapi.com/ip/check';
  // key: string = '118f47fd3amsh0eefa9c432d5b98p1e4230jsn0eb0e622855d';
  rapidAPIKey: string = '118f47fd3amsh0eefa9c432d5b98p1e4230jsn0eb0e622855d'
  rapidAPIHost: string = 'ip-geo-location.p.rapidapi.com';
  result: any;

  keyLocation = '118f47fd3amsh0eefa9c432d5b98p1e4230jsn0eb0e622855d';
  urlLocation = "https://ip-geo-location.p.rapidapi.com/ip/check?format=json";

  location: Object;

  constructor(private http: HttpClient) { }


  getLocation(): Observable<any> {
    return this.http.get(this.locationAPI, {
      "headers": {
        "x-rapidapi-host": this.rapidAPIHost,
        "x-rapidapi-key": this.rapidAPIKey
      }
    }).pipe(map(res => {
      return res
    }));
  }


}
