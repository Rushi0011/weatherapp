import axios from 'axios'

const apiKey = import.meta.env.VITE_DomainKey;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export const checkWeather =  (cityName) => {
      const response = axios.get(`${apiUrl}${cityName}&appid=${apiKey}`);
      return response;
  };