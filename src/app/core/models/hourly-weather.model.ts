import { WeatherCondition } from './weather-condition.model';

export interface HourlyWeather {
  DewPoint: number;
  DateTime: number;
  FeelsLike: number;
  Humidity: number;
  Pressure: number;
  Temperature: number;
  WindDegree: number;
  WindSpeed: number;
  WeatherConditions: WeatherCondition[];
}
