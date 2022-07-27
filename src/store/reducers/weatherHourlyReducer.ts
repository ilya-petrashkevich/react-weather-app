import { WeatherHourlyAction, WeatherHourlyActionType, WeatherHourlyState } from "../types/weatherHourly";

const initialState: WeatherHourlyState = {
  weatherHourly: []
}

export const weatherHourlyReducer = (state = initialState, action: WeatherHourlyAction): WeatherHourlyState => {
  switch (action.type) {
    case WeatherHourlyActionType.GET_WEATHER_HOURLY:
      return {weatherHourly: action.payload}
    default:
      return state;
  }
};