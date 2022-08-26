import { Dispatch } from "redux";
import http from "../../http";
import { WeatherTodayAction, WeatherTodayActionType } from "../types/weatherToday";

const API_KEY = "2c25e3f5ceb4e5b0f8969b3ef2a5a5ab";

export const getWeatherToday = (city: any) => {

  return async (dispatch: Dispatch<WeatherTodayAction>) => {
    await http.get(`weather?q=${city}&limit=1&appid=${API_KEY}&units=metric`).then(response => {
      dispatch({type: WeatherTodayActionType.GET_WEATHER_TODAY, payload: response.data})
    }).catch(err => alert( (err.code === `ERR_NETWORK`) ? `${err.code}` : `${err.code} ${err.response.data.cod} ${err.response.data.message}`) );
  }
}