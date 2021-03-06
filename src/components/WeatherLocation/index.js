import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import {CLOUD,
      CLOUDY,
      SUN,
      RAIN,
      SNOW,
      WINDY} from './../../constants/weathers';

const data = {
      temperature: 15,
      weatherState: SUN,
      humidity: 10,
      wind: '10 m/s',
}
const WeatherLocation = () => (
<div> <Location city={"Madrid"}></Location>
      <WeatherData data={data}></WeatherData>     
</div>
);

export default WeatherLocation;