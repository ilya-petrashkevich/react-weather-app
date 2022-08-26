import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import './WeatherToday.css';
import Spinner from '../spinner/Spinner';

//===================== Переменные для картинок фона ========================
const clear = new URL('../../images/clear.webp', import.meta.url);
const clouds = new URL('../../images/clouds.webp', import.meta.url);
const rain = new URL('../../images/rain.webp', import.meta.url);
const thunderstorm = new URL('../../images/thunderstorm.webp', import.meta.url);
const snow = new URL('../../images/snow.webp', import.meta.url);
const mist = new URL('../../images/mist.webp', import.meta.url);


const WeatherToday = () => {

  const { today } = useTypedSelector(state => state.today);

  const todayDate = (date: number) => {
    let day: number = new Date(date * 1000).getDate();
    let month = new Date(date * 1000).getMonth() + 1;
    let year = new Date(date * 1000).getFullYear();

    let doubleDay = (day < 10) ? `0${day}` : day;
    let doubleMonth = (month < 10) ? `0${month}` : month;

    return `${(day < 10) ? doubleDay : day}.${(month < 10) ? doubleMonth : month}.${year}`;
  };

  const getWeatherIcon = (data: string) => {
    return `http://openweathermap.org/img/wn/${data}@2x.png`;
  };

  const todayDuration = (sunset: number, sunrise: number) => {
    let hoursDuration = Math.trunc((sunset - sunrise) / 3600);
    let minutesDuration = Math.round((((sunset - sunrise) / 3600) - hoursDuration) * 60);

    let doubleMinutesDuration = (minutesDuration < 10) ? `0${minutesDuration}` : minutesDuration;

    return `${hoursDuration}:${(minutesDuration < 10) ? doubleMinutesDuration : minutesDuration}`;
  };

  const todaySunrise = (sunrise: number) => {
    let hoursSunrise = new Date(sunrise * 1000).getHours();
    let minutesSunrise = new Date(sunrise * 1000).getMinutes();

    let doubleHoursSunrise = (hoursSunrise < 10) ? `0${hoursSunrise}` : hoursSunrise;
    let doubleMinutesSunrise = (minutesSunrise < 10) ? `0${minutesSunrise}` : minutesSunrise;

    return `${(hoursSunrise < 10) ? doubleHoursSunrise : hoursSunrise}:${(minutesSunrise < 10) ? doubleMinutesSunrise : minutesSunrise}`;
  };

  const todaySunset = (sunset: number) => {
    let hoursSunset = new Date(sunset * 1000).getHours();
    let minutesSunset = new Date(sunset * 1000).getMinutes();

    let doubleHoursSunset = (hoursSunset < 10) ? `0${hoursSunset}` : hoursSunset;
    let doubleMinutesSunset = (minutesSunset < 10) ? `0${minutesSunset}` : minutesSunset;

    return `${(hoursSunset < 10) ? doubleHoursSunset : hoursSunset}:${(minutesSunset < 10) ? doubleMinutesSunset : minutesSunset}`;
  };

  const mathRoundTemp = (temperature: number) => {
    return Math.round(temperature);
  };

  //============= меняем фоновую картинку  в зависимости от того, что пришло в ответе на сегодня ================
  if(today?.weather && today?.weather[0].description.includes(`clouds`)){
    console.log( today?.weather[0].description );
    document.body.style.backgroundImage = `url(${clouds})`;
      document.body.style.width = `100%`;
      document.body.style.height = `100vh`;
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundSize = 'cover';
  } else if ( today?.weather && today?.weather[0].description.includes(`clear`) ) {
    document.body.style.backgroundImage = `url(${clear})`;
      document.body.style.width = `100%`;
      document.body.style.height = `100vh`;
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundSize = 'cover';
  } else if ( today?.weather && today?.weather[0].description.includes(`rain`) ) {
    document.body.style.backgroundImage = `url(${rain})`;
      document.body.style.width = `100%`;
      document.body.style.height = `100vh`;
      document.body.style.backgroundSize = 'cover';
  } else if ( today?.weather && today?.weather[0].description.includes(`thunderstorm`) ) {
    document.body.style.backgroundImage = `url(${thunderstorm})`;
      document.body.style.width = `100%`;
      document.body.style.height = `100vh`;
      document.body.style.backgroundSize = 'cover';
  } else if ( today?.weather && today?.weather[0].description.includes(`snow`) ) {
    document.body.style.backgroundImage = `url(${snow})`;
    document.body.style.width = `100%`;
    document.body.style.height = `100vh`;
    document.body.style.backgroundSize = 'cover';
  } else if ( today?.weather && today?.weather[0].description.includes(`mist`) ) {
    document.body.style.backgroundImage = `url(${mist})`;
    document.body.style.width = `100%`;
    document.body.style.height = `100vh`;
    document.body.style.backgroundSize = 'cover';
  } else if ( today?.weather && today?.weather[0].description.includes(`haze`) ) {
    document.body.style.backgroundImage = `url(${mist})`;
    document.body.style.width = `100%`;
    document.body.style.height = `100vh`;
    document.body.style.backgroundSize = 'cover';
  }

  return (
    <>
      {today?.weather ?
        <div className='weather-today-container'>
          <h1 className='weather-today-container-name'>{today.name}</h1>
          <div className='weather-today-container-header'>
            <div>TODAY WEATHER</div>
            <div>{todayDate(today?.dt)}</div>
          </div>
            <div className='weather-today-container-info'>
              <div>
                <img src={getWeatherIcon(today.weather[0]?.icon)} alt='' />
                <div>{today?.weather[0].description}.</div>
              </div>
              <div className='info-air-temperature-container'>
                <div className='info-air-temperature'>{mathRoundTemp(today?.main.temp)}<sup>o</sup>C</div>
                <div className='info-air-feels_like'>Real Feel {mathRoundTemp(today?.main.feels_like)}<sup>o</sup></div>
              </div>
              <div className='table-container'>
                <table>
                  <tbody>
                  <tr>
                    <th scope='row'>Sunrise:</th>
                    <td>{todaySunrise(today?.sys.sunrise)}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Sunset:</th>
                    <td>{todaySunset(today?.sys.sunset)}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Duration:</th>
                    <td>{todayDuration(today?.sys.sunset, today?.sys.sunrise)} hr</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        :
        <Spinner />
      }
    </>
  )
}

export default WeatherToday;