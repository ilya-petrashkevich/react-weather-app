import { IListForecast } from '../../components/weather/IWeatherForecast';

export interface WeatherFiveDaysState {
  days: IListForecast[];
}

export enum WeatherFiveDaysActionType {
  GET_WEATHER_FIVE_DAYS = 'GET_WEATHER_FIVE_DAYS'
}

interface GetWeatherFiveDaysAction {
  type: WeatherFiveDaysActionType.GET_WEATHER_FIVE_DAYS;
  payload: IListForecast[];
}

export type WeatherFiveDaysAction = GetWeatherFiveDaysAction;