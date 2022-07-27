import React, { Dispatch, SetStateAction } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import './WeatherForecast.css'
import { useActions } from '../../hooks/useActions';

//===================== Переменные для картинок фона ========================
const clear = new URL('../../images/clear.jpg', import.meta.url);
const clouds = new URL('../../images/clouds.jpg', import.meta.url);
const rain = new URL('../../images/rain.jpg', import.meta.url);
const thunderstorm = new URL('../../images/thunderstorm.jpg', import.meta.url);
const snow = new URL('../../images/snow.jpg', import.meta.url);
const mist = new URL('../../images/mist.jpg', import.meta.url);

const WeatherForecast = (
  {setOpenWeatherHourlyModal}:
  {setOpenWeatherHourlyModal: Dispatch<SetStateAction<boolean>>}) => {

  const {getSelectedDayWeather} = useActions();
  const { today } = useTypedSelector(state => state.today);

  const {days} = useTypedSelector(state => state.days);

  const getSortedDataForFiveDays = (data: any) => {
    const array = [];
    array.push(data[0]);

    for (let i = 0; i < data.length; i++) {
      if (data[i].dt_txt.includes(`15:00:00`) && data[0].dt_txt.split(" ")[0] !== data[i].dt_txt.split(" ")[0]) {
        array.push(data[i]);
      }
    }
    array.length > 5 ? array.pop() : array;
    return array;
  }

  const getForecastDate = (item: any) => {
    let forecastDateData: any;
    forecastDateData  = new Date(item.dt_txt);
    return forecastDateData.toString().split(" ");
  }

  const getWeatherIcon = (data: string) => {
    return `http://openweathermap.org/img/wn/${data}@2x.png`;
  }

  const getItemDate = (item: any) => {
    return item.dt_txt.split(" ")[0];
  }

  const mathRoundTemp = (temperature: number) => {
    return Math.round( temperature );
  }
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

  return   (
    <div className="forecast-container"  >
      { days.length && getSortedDataForFiveDays(days).map( (day ) =>

        <div className="forecast-block" key={day.dt_txt} onClick={() => ( getSelectedDayWeather( getItemDate(day), days), setOpenWeatherHourlyModal(true) )} >
          <div className="forecast-week-day">{getForecastDate(day)[0].toUpperCase() }</div>
          <div className="forecast-date">{getForecastDate(day)[1].toUpperCase()} {getForecastDate(day)[2].toUpperCase()}</div>
          <div className="forecast-image"><img src={getWeatherIcon(day.weather[0].icon)} alt="" /></div>
          <div className="forecast-temperature">{mathRoundTemp(day.main.temp)}<sup>o</sup>C</div>
          <div className="forecast-description">{day.weather[0].description}</div>
        </div>
      )}
     </div>
   );
}

export default WeatherForecast;