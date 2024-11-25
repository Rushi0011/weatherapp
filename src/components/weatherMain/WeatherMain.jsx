import React, { useEffect, useState } from 'react'
import { getWeatherIcon } from '../../utils/helperFuntions';
import { checkWeather } from '../../services/api';
import './WeatherMain.css'

import SearchIcon from "../../assets/images/search.png";
import HumidityImg from "../../assets/images/humidity.png";
import WindImg from "../../assets/images/wind.png";
import { TopCountries } from '../topCountries/TopCountries';

export const WeatherMain = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);
    const [cityCardsData,  setCityCardsData] = useState([]);

    useEffect(() => {
        console.log(weatherData,error, "weather", 'concards', cityCardsData);
    }, [weatherData, error, cityCardsData]);

    const handleSearch = async(city) => {
        if(city)
        {
            try {
                const response = await checkWeather(city);
                console.log(response, 'res')
                if (response.status === 404) {
                  setError(true);
                  setWeatherData(null);
                } else {
                  const data = response.data;
                  setWeatherData({
                    name: data.name,
                    temp: Math.round(data.main.temp),
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                    weatherMain: data.weather[0].main.toLowerCase(),
                  });
                  setError(false);
                }
              } catch (error) {
                console.error("Error fetching weather data:", error);
                setError(true);
                setWeatherData(null);
              }
        }
      };

    return (
        <>
            <div className="weather-app">
        <div className="navbar">
            <a href="/" className="logo">WeatherApp</a>
        </div>

        <div className="cardContainer">
            <div className="card">
                <div className="search">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => {if(e.key ==  'Enter') handleSearch()}}
                    spellCheck="false"
                />
                <button onClick={() => handleSearch(city)}>
                    <img src={SearchIcon} alt="Search" />
                </button>
                </div>
                {error && (
                <div className="error">
                   Invalid city name
                </div>
                )}
                {weatherData && 
                <div className="weather">
                    <img src={getWeatherIcon(weatherData?.weatherMain)} className="weather-icon" alt="Weather Icon" />
                    <h1 className="temp">{weatherData?.temp}°C</h1>
                    <h2 className="city">{weatherData?.name}</h2>
                    <div className="details">
                    <div className="col">
                        <img src={HumidityImg} alt="Humidity Icon" />
                        <div>
                        <p className="humidity">{weatherData?.humidity}%</p>
                        <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src={WindImg} alt="Wind Icon" />
                        <div>
                        <p className="wind">{weatherData?.wind} km/h</p>
                        <p>Wind Speed</p>
                        </div>
                    </div>
                    </div>
                </div>
                }
            </div>
            <div className="card">
                <TopCountries
                    cityCardsData={cityCardsData}
                    setCityCardsData={setCityCardsData} 
                    setCity={setCity}
                    handleSearch={handleSearch}
                />
            </div>
            </div>
        </div>
        </>
  )
}
