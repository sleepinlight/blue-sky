import { Injectable } from '@angular/core';
import { OWMApiKey } from '../../../../keys';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { HourlyWeather } from '../models/hourly-weather.model';
import { DailyWeather } from '../models/daily-weather.model';
import { WeatherCondition } from '../models/weather-condition.model';
import { CurrentWeather } from '../models/current-weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseOWMApi: string;

  constructor(private http: HttpClient) {
    this.baseOWMApi = 'https://api.openweathermap.org/data/2.5';
  }

  getAllWeather(lat, lon) {
    const url = `${this.baseOWMApi}/onecall?lat=${lat}&lon=${lon}&appid=${OWMApiKey}`;
    return this.http.get(url);
  }

  processCurrentWeather(currentWeatherPayload): CurrentWeather {
    let currentWeather = {
      DateTime: currentWeatherPayload.dt,
      SunriseTime: currentWeatherPayload.sunrise,
      SunsetTime: currentWeatherPayload.sunset,
      FeelsLike: currentWeatherPayload.feels_like,
      Pressure: currentWeatherPayload.pressure,
      Humidity: currentWeatherPayload.humidity,
      UVIndex: currentWeatherPayload.uvi,
      Clouds: currentWeatherPayload.clouds,
      Visibility: currentWeatherPayload.visibility,
      WindSpeed: currentWeatherPayload.wind_speed,
      WindDegree: currentWeatherPayload.wind_deg,
      WeatherConditions: [],
      Rain: currentWeatherPayload.rain
    };
    this.handleWeatherConditions(currentWeatherPayload, currentWeather);
    return currentWeather;
  }

  processHourlyWeather(hourlyWeatherPayload): HourlyWeather[] {
    let hourArr = [];

    hourlyWeatherPayload.forEach((hour) => {
      let hourEntry = {
        DewPoint: hour.dew_point,
        DateTime: hour.dt,
        FeelsLike: hour.feels_like,
        Humidity: hour.humidity,
        Pressure: hour.pressure,
        Temperature: hour.temp,
        WeatherConditions: [],
        WindDegree: hour.wind_deg,
        WindSpeed: hour.wind_speed
      };
      this.handleWeatherConditions(hour, hourEntry);
      hourArr.push(hourEntry);
    });
    return hourArr;
  }

  processDailyWeather(dailyWeatherPayload): DailyWeather[] {
    let weekArr = [];
    dailyWeatherPayload.forEach((day) => {
      let dayItem = {
        Clouds: day.clouds,
        DateTime: day.dt,
        DewPoint: day.dew_point,
        FeelsLike: day.feels_like,
        Humidity: day.humidity,
        Pressure: day.pressure,
        Rain: day.rain,
        SunriseTime: day.sunrise,
        SunsetTime: day.sunset,
        TemperatureMorning: day.temp.morn,
        TemperatureDaytime: day.temp.day,
        TemperatureEvening: day.temp.eve,
        TemperatureNight: day.temp.night,
        TemperatureHigh: day.temp.max,
        TemperatureLow: day.temp.min,
        UVIndex: day.temp.uvi,
        WindDegree: day.wind_deg,
        WindSpeed: day.wind_speed,
        WeatherConditions: []
      };
      this.handleWeatherConditions(day, dayItem);
      weekArr.push(dayItem);
    });
    return weekArr;
  }

  handleWeatherConditions(interval, transformedObject) {
    if (interval.weather.length) {
      interval.weather.forEach((weatherCondition) => {
        let weatherEntry = {
          Brief: weatherCondition.main,
          Id: weatherCondition.id,
          Icon: weatherCondition.icon,
          Description: weatherCondition.description
        };
        transformedObject.WeatherConditions.push(weatherEntry);
      });
    }
  }
}
