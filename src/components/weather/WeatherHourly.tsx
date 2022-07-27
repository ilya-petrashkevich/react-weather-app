import React from 'react';
import moment from 'moment';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import './WeatherHourly.css';
import Spinner from '../spinner/Spinner';

const WeatherHourly = () => {

  const {weatherHourly} = useTypedSelector(state => state.weatherHourly);

  const getWeatherIcon = (data: string) => {
    return `http://openweathermap.org/img/wn/${data}@2x.png`;
  }

  const getForecastDateData = ( arrayItemTxtDate: string ) => {
    let forecastDateData = new Date(arrayItemTxtDate);

    return forecastDateData.toString().split(" ");
  }

  return (
    <div className="container-weather-hourly">
      <h2>HOURLY</h2>
      <div className="container-weather-hourly-info">
        {weatherHourly?.[0] &&
          <div className="block-weather-hourly-info-name">
            <div>{getForecastDateData(weatherHourly[0].dt_txt)[0]}</div>
            <img className="zero-image" src={getWeatherIcon(weatherHourly[0].weather[0].icon)} alt=""/>
            <div>Forecast</div>
            <div>Temp (<sup>o</sup>C)</div>
            <div>RealFeel</div>
            <div>Wind (km/h)</div>
          </div>
        }
        {weatherHourly.length ?
          weatherHourly.map((time) => (
            <div className="block-weather-hourly-info" key={time.dt_txt}>
              {/* везде выводил даты функциями, а тут решил хоть в одном месте попробовать воспользоваться библиотекой moment.js */}
              <div>{ moment(time.dt * 1000 - 3 * 3600 * 1000).format('HH:mm') }</div>
              <div>
                <img src={getWeatherIcon(time.weather[0].icon)} alt=""/>
              </div>
              <div>{time.weather[0].description}</div>
              <div>{Math.round(time.main.temp)}<sup>o</sup></div>
              <div>{Math.round(time.main.feels_like)}<sup>o</sup></div>
              <div>{Math.round(time.wind.speed * 3600 / 1000)}</div>
            </div>
          ))
          :

          <Spinner />

        }
      </div>
    </div>
  )

}

export default WeatherHourly;