import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from '../core/services/location.service';
import { from, Subscription } from 'rxjs';
import { WeatherService } from '../core/services/weather.service';
import { HourlyWeather } from '../core/models/hourly-weather.model';
import { SubSink } from 'subsink';
import { finalize } from 'rxjs/operators';
import { EventBusService, Events, EmitEvent } from '../core/services/event-bus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'Blue Sky Weather';
  location: any;
  currentWeather: any;
  loading: boolean;
  private loadingListener: Subscription;
  hourlyWeather: HourlyWeather[];
  dailyWeather: any;
  subs: SubSink = new SubSink();

  constructor(private locationService: LocationService, private weatherService: WeatherService, private eventBus: EventBusService) {
    this.subs.add((this.loadingListener = this.eventBus.on(Events.AppLoading, (isLoading) => (this.loading = isLoading))));
  }

  ngOnInit() {
    this.refreshCurrentLocation();
  }

  ngOnDestroy() {
    this.subs && this.subs.unsubscribe();
  }

  handleGlobalEvent(eventName: string, val: any): void {
    this.eventBus.emit(new EmitEvent(Events[eventName], val));
  }

  refreshCurrentLocation() {
    this.handleGlobalEvent('AppLoading', true);
    from(this.locationService.getPosition())
      .pipe(
        finalize(() => {
          this.eventBus.emit(new EmitEvent(Events.AppLoading, false));
        })
      )
      .subscribe((loc) => {
        this.location = loc;
        this.weatherService.getAllWeather(this.location.lat, this.location.lng).subscribe((payload) => {
          this.currentWeather = this.weatherService.processCurrentWeather(payload['current']);
          this.hourlyWeather = this.weatherService.processHourlyWeather(payload['hourly']);
          this.dailyWeather = this.weatherService.processDailyWeather(payload['daily']);
        });
      });
  }
}
