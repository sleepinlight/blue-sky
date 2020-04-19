import { Component, OnInit, Input } from '@angular/core';
import { HourlyWeather } from '@src/app/core/models/hourly-weather.model';

@Component({
  selector: 'app-hourly-item',
  templateUrl: './hourly-item.component.html',
  styleUrls: ['./hourly-item.component.scss']
})
export class HourlyItemComponent implements OnInit {
  @Input() hourWeatherObject: HourlyWeather;
  constructor() {}

  ngOnInit() {}
}
