import axios from 'axios'


const apiKey = "c46a5a1d660c5adba0eadeef5a6cbc20";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export const checkWeather =  (cityName) => {
      const response = axios.get(`${apiUrl}${cityName}&appid=${apiKey}`);
      return response;
  };