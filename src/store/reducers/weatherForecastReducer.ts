import { WeatherFiveDaysAction, WeatherFiveDaysActionType, WeatherFiveDaysState } from "../types/weatherFiveDays";

const initialState: WeatherFiveDaysState = {
  days: []
}

export const weatherForecastReducer = (state = initialState, action: WeatherFiveDaysAction): WeatherFiveDaysState => {
  switch (action.type) {
    case WeatherFiveDaysActionType.GET_WEATHER_FIVE_DAYS:
      return {days: action.payload}
    default: 
      return state;
  }
};