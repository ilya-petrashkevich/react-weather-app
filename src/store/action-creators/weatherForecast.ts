import { Dispatch } from "redux";
import http from "../../http";
import { WeatherFiveDaysAction, WeatherFiveDaysActionType } from "../types/weatherFiveDays";


const API_KEY = "2c25e3f5ceb4e5b0f8969b3ef2a5a5ab";


export const getWeatherFiveDays = (city: any) => {
  return async (dispatch: Dispatch<WeatherFiveDaysAction>) => {
    await http.get(`forecast?q=${city}&appid=${API_KEY}&units=metric`).then( response => {
      dispatch({type: WeatherFiveDaysActionType.GET_WEATHER_FIVE_DAYS, payload: response.data.list})

    }).catch(err => console.log( err ))

  }
}