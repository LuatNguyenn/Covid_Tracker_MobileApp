import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CovidService {

  // API ver 1
  covidAPI: string = 'https://covid-19-data.p.rapidapi.com/country?name=';
  rapidAPIKey: string = '118f47fd3amsh0eefa9c432d5b98p1e4230jsn0eb0e622855d'
  rapidAPIHost: string = 'covid-19-data.p.rapidapi.com';

  //API ver 2
  covidAPI2: string = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=';
  // rapidAPIKey2: string = '118f47fd3amsh0eefa9c432d5b98p1e4230jsn0eb0e622855d'
  rapidAPIHost2: string = 'coronavirus-monitor.p.rapidapi.com';


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

  getCovidByCountryName2(name: string): Observable<any>{
    return this.http.get(this.covidAPI2 + name, {
      "headers": {
        "x-rapidapi-host": this.rapidAPIHost2,
        "x-rapidapi-key": this.rapidAPIKey
      }
    }).pipe(map(res => {
      return res
    }));
  }

}
