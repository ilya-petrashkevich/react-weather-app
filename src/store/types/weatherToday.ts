import { IWeatherToday } from "../../components/weather/IWeatherToday";

export interface WeatherTodayState {
  today: IWeatherToday;
}

export enum WeatherTodayActionType {
  GET_WEATHER_TODAY = 'GET_WEATHER_TODAY '
}

interface GetWeatherTodayAction {
  type: WeatherTodayActionType.GET_WEATHER_TODAY;
  payload: IWeatherToday;
}

export type WeatherTodayAction = GetWeatherTodayAction;