import { IListForecast } from "../../components/weather/IWeatherForecast";

export interface WeatherHourlyState {
  weatherHourly: IListForecast[];
}

export enum WeatherHourlyActionType {
  GET_WEATHER_HOURLY = 'GET_WEATHER_HOURLY'
}

interface GetWeatherHourlyAction {
  type: WeatherHourlyActionType.GET_WEATHER_HOURLY;
  payload: IListForecast[];
}

export type WeatherHourlyAction = GetWeatherHourlyAction;