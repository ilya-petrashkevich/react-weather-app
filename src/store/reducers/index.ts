import { combineReducers } from "redux";
import { weatherForecastReducer } from "./weatherForecastReducer";
import { weatherTodayReducer } from "./weatherTodayReducer";
import { weatherHourlyReducer } from './weatherHourlyReducer';

export const rootReducer = combineReducers({
  today: weatherTodayReducer,
  days: weatherForecastReducer,
  weatherHourly: weatherHourlyReducer
});

export type RootState = ReturnType<typeof rootReducer>