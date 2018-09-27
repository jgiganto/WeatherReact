import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY} from './../../../constants/weathers';
import './styles.css';

const ICONS = {
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy"
};


const stateToIconName = weatherState => {
  switch (weatherState) {
    case CLOUD:
      return CLOUD;
    case CLOUDY:
      return 'cloudy' ;
    case SUN:
      return 'day-sunny';
    case RAIN:
      return SNOW;
    case 'snow':
      return 'snow';
    case WINDY:
      return 'windy';
    default:
      return 'day-sunny';
  }
};
//icon ? <> : <>
const getWeatherIcon = weatherState => 
    <WeatherIcons className="wicon" name={ICONS[weatherState]?ICONS[weatherState]:"day-sunny"} size="2x"/>;
const sizeIcon = "4x";
    


const WeatherTemperature = ({temperature, weatherState}) => (
  <div className="weatherTemperatureCont">
    {getWeatherIcon (weatherState)}
    <span className="temperature">{`${temperature} C°`}</span>
    <span className="temperature">{` C°`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string.isRequired
};
export default WeatherTemperature;
