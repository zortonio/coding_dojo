import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  weather = null;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.getWeather('Washington DC', (weather) => {
      this.weather = weather;
      console.log(weather);
    });
  }

}
