import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  weather = null;

  constructor(private _weatherService: WeatherService) {
    
  }

  ngOnInit() {
    this._weatherService.getWeather('Seattle', (weather) => {
      this.weather = weather;
      console.log(weather);
    });
  }

}
