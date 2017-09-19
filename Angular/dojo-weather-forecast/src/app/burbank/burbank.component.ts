import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  weather = null;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.getWeather('Burbank', (weather) => {
      this.weather = weather;
      console.log(weather);
    })
  }

}
