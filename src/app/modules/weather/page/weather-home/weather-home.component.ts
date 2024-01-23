import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/WeatherDatas';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'Blumenau';
  weatherDatas!: WeatherDatas;

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void{
  this.weatherService.getWeatherDatas(cityName)
  .subscribe({
    next: (Response) => {
      Response &&  (this.weatherDatas = Response);
      console.log(this.weatherDatas)
    },
    error: (error) => console.log(error),
  });
  }
}
