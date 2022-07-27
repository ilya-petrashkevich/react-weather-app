import React, { useState } from 'react';
import WeatherForecast from '../components/weather/WeatherForecast';
import ModalWeatherHourly from '../components/modal/ModalWeatherHourly';

const Forecast = () => {
  const [openWeatherHourlyModal, setOpenWeatherHourlyModal] = useState(false);

  return (
    <div>
      <WeatherForecast setOpenWeatherHourlyModal={setOpenWeatherHourlyModal} />
      <ModalWeatherHourly
        openWeatherHourlyModal={openWeatherHourlyModal}
        setOpenWeatherHourlyModal={setOpenWeatherHourlyModal}
      />
    </div>
  )

}

export default Forecast;