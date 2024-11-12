import React, { useEffect, useState } from "react";
import SearchIcon from "../../assets/images/search.png"
import HumidityImg from "../../assets/images/humidity.png"
import WindImg from "../../assets/images/wind.png"


export const Trial = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(weatherData, 'weather');
  },[weatherData])

  const apiKey = "c46a5a1d660c5adba0eadeef5a6cbc20";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const checkWeather = async (cityName) => {
    try {
      const response = await fetch(`${apiUrl}${cityName}&appid=${apiKey}`);
      if (response.status === 404) {
          setError(true);
          setWeatherData(null);
        } else {
            const data = await response.json();
            setWeatherData({
                name: data.name,
                temp: Math.round(data.main.temp),
                humidity: data.main.humidity,
                wind: data.wind.speed,
                weatherMain: data.weather[0].main.toLowerCase(),
            });
            console.log(data, "text");
            setError(false);
        }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(true);
      setWeatherData(null);
    }
  };

  const handleSearch = () => {
    if (city) {
      checkWeather(city);
    }
  };

  return (
    <div className="weather-app">
      <div className="navbar">
        <a href="#" className="logo">
          Weather App
        </a>
      </div>

      <div className="card">
        <div className="search">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            spellCheck="false"
          />
          <button onClick={handleSearch}>
            <img src={SearchIcon} alt="Search" />
          </button>
        </div>
        {error && (
          <div className="error">
            <p>Invalid city name</p>
          </div>
        )}
        {/* {weatherData && ( */}
          <div className="weather">
           {/* <img
              src={`images/${
                weatherData.weatherMain === "clouds"
                  ? "clouds"
                  : weatherData.weatherMain === "clear"
                  ? "clear"
                  : weatherData.weatherMain === "rain"
                  ? "rain"
                  : weatherData.weatherMain === "drizzle"
                  ? "drizzle"
                  : "mist"
              }.png`}
              className="weather-icon"
              alt="Weather Icon"
            /> */}
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
        {/* )} */}
      </div>
    </div>
  );
};


