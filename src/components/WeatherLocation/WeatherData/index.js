import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {CLOUD,
      CLOUDY,
      SUN,
      RAIN,
      SNOW,
      WINDY} from './../../../constants/weathers';
import './styles.css';

const WeatherData = ({ data }) => {
      const { temperature, weatherState, humidity, wind } = data;
      return (<div className="weatherDataCont" > 
            <WeatherTemperature
                  temperature={22} 
                  weatherState={SUN}
            />        
            <WeatherExtraInfo humidity={70} wind={"20 m/s"}/>      
      </div>);
};


export default WeatherData;