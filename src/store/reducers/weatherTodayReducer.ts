import { IWeatherToday } from "../../components/weather/IWeatherToday";
import { WeatherTodayAction, WeatherTodayActionType, WeatherTodayState } from "../types/weatherToday";

const initialState: WeatherTodayState = {
  today: <IWeatherToday>{}
}

export const weatherTodayReducer = (state = initialState, action: WeatherTodayAction): WeatherTodayState => {
  switch (action.type) {
    case WeatherTodayActionType.GET_WEATHER_TODAY:
      return {today: action.payload}
    default: 
      return state;
  }
};