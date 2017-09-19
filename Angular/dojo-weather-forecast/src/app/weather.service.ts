import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

  weather = null;

  constructor(private _http: Http) { }

  getWeather(city, callback){
    this._http.get('http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=e3eafe671e9b72bd5632c50f73683ca2&q='+city+'&units=imperial').subscribe(
      (response) => {
        this.weather = response.json();
        callback(this.weather);
      },
      (err) => {
        console.log(err);
      }
    );
  };

}
