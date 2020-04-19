import { WeatherCondition } from './weather-condition.model';

export interface CurrentWeather {
  DateTime: number;
  SunriseTime: number;
  SunsetTime: number;
  FeelsLike: number;
  Pressure: number;
  Humidity: number;
  UVIndex: number;
  Clouds: number;
  Visibility: number;
  WindSpeed: number;
  WindDegree: number;
  WeatherConditions: WeatherCondition[];
  Rain: number;
}
