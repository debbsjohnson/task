import './App.css';
import React, { useState } from 'react';

// import "../dist/output.css"

import "./index.css"
import Search from './components/search/search';
import CurrentWeather from './components/search/weather/currentweather';

import { WEATHER_API_KEY } from './api';
import { WEATHER_API_URL } from './api';
import Forecast from './components/search/weather/forecast';





export default function App() {


  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [ lat, lon ] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);




    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));

    };
    

  

  console.log(forecastWeather);

 
  return (
    <div className="container max-w-screen-lg mt-4 py-5 px-32 h-fit">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather} />}
      
    </div>
  );
  }

      // <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />

