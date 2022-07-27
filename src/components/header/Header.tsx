import React, { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import './header.css';
import today from '../../pages/Today';

const Header = () => {

  let city: string = 'Minsk';

  const [value, setValue] = useState('');

  const {getWeatherToday} = useActions();
  const {getWeatherFiveDays} = useActions();

  useEffect(() => {
    getWeatherToday(city);
  }, [today]);

  useEffect(() => {
    getWeatherFiveDays(city);
  }, [today]);

  return (
    <div className='header-container'>
      <h2>MY WEATHER</h2>
      <div className='search-container'>

        <div className='header-options-block'>
          <input type="text"
                 className="form-control"
                 placeholder="City name"
                 value={value}
                 onKeyDown={ (e) => e.key === "Enter" ? (( getWeatherToday(value), getWeatherFiveDays(value)), setValue("")) : "" }
                 onChange={ event => setValue(event.target.value)}
          />
          <button type="button"
                  className="btn btn-success"
                  onClick={() => ( ( getWeatherToday(value), getWeatherFiveDays(value) ), setValue(""))}
          >Search</button>

      </div>

      </div>
    </div>
  )

}

export default Header;
