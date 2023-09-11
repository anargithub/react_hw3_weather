import React from 'react';
import "./Weather.css"
import Location from '../Location/Location';

export default function Weather ({ weather }) {
  return (
    <div>
      <Location name={weather.name} country={weather.sys.country} />
      <div className='weather-box'>
        <div className='temp'>{Math.round(weather.main.temp)} C</div>
        <div className='weather'>{weather.weather[0].main}</div>
      </div>
    </div>
  );
}

