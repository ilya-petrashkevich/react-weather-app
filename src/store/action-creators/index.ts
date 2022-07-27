import * as WeatherTodayActionCreators from "./weatherToday";
import * as WeatherFiveDaysActionCreators from "./weatherForecast"
import * as WeatherHourlyActionCreators from "./weatherHourly";

export default {
  ...WeatherTodayActionCreators,
  ...WeatherFiveDaysActionCreators,
  ...WeatherHourlyActionCreators
}