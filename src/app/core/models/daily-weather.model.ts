import { WeatherCondition } from './weather-condition.model';

export interface DailyWeather {
  Clouds: number;
  DateTime: number;
  DewPoint: number;
  FeelsLike: number;
  Humidity: number;
  Pressure: number;
  Rain: number;
  SunriseTime: number;
  SunsetTime: number;
  TemperatureMorning: number;
  TemperatureDaytime: number;
  TemperatureEvening: number;
  TemperatureNight: number;
  TemperatureHigh: number;
  TemperatureLow: number;
  UVIndex: number;
  WeatherConditions: WeatherCondition[];
  WindDegree: number;
  WindSpeed: number;
}
