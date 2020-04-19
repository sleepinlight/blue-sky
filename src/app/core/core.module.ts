import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { LocationService } from './services/location.service';
import { EventBusService } from './services/event-bus.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [WeatherService, LocationService, EventBusService]
})
export class CoreModule {}
