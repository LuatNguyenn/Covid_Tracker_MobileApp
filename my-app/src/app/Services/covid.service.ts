import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CovidService {
  covidAPI: string = 'https://covid-19-data.p.rapidapi.com/country?name=';
  // key: string = '118f47fd3amsh0eefa9c432d5b98p1e4230jsn0eb0e622855d';
  rapidAPIKey: string = '118f47fd3amsh0eefa9c432d5b98p1e4230jsn0eb0e622855d'
  rapidAPIHost: string = 'covid-19-data.p.rapidapi.com';
  result: any;


  covidRes: Object;

  constructor(private http: HttpClient) { }


  getCovidByCountryName(name:string): Observable<any> {
    return this.http.get(this.covidAPI + name, {
      "headers": {
        "x-rapidapi-host": this.rapidAPIHost,
        "x-rapidapi-key": this.rapidAPIKey
      }
    }).pipe(map(res => {
      return res
    }));
  }


}
