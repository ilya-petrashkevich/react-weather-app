import { Dispatch } from "redux";
import { IListForecast } from "../../components/weather/IWeatherForecast";
import { WeatherHourlyAction, WeatherHourlyActionType } from "../types/weatherHourly";

export const getSelectedDayWeather = ( selectedDayDate: string, weatherData: IListForecast[] ) => {
  const selectedDayWeather: any = [];

  for (let dataItem of weatherData) {
    if ( selectedDayDate === dataItem.dt_txt.split(" ")[0]) {
      selectedDayWeather.push(dataItem);
    }
  }
  return  (dispatch: Dispatch<WeatherHourlyAction>) => {
    dispatch({type: WeatherHourlyActionType.GET_WEATHER_HOURLY, payload: selectedDayWeather});

  }

}