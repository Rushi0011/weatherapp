import React from 'react'
import './CityCard.css'
import { getWeatherIcon } from '../../utils/helperFuntions'

export const CityCard = ({name, temp, weather, setCity, handleSearch}) => {
    const handleCardClick = () => {
        setCity(name);
        handleSearch(name);

    }
    return (
    <div className='city-card' onClick={handleCardClick}>
        <div> <img src={getWeatherIcon(weather)} className="card-weather-icon" alt="Weather Icon" /> </div>
        <div> {temp}°C </div>
        <div className='card-city-name'> {name} </div>
    </div>
    )
}
