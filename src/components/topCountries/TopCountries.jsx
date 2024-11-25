import React from 'react'
import './TopCountries.css'
import { Select } from 'antd'
import { countriesDropdownOptions, countryTopCities } from '../../utils/constants'
import { checkWeather } from '../../services/api'
import { CityCard } from '../cityCard/CityCard'

export const TopCountries = ({cityCardsData, setCityCardsData, setCity, handleSearch}) => {

    const onChange = async(value) => {
        const countryArray = countryTopCities[value];
        setCityCardsData([]);
        let cardsArray = []
        for(let i = 0 ; i<countryArray.length ; i++)
        {
            const response = await checkWeather(countryArray[i]);
            const resData = response.data
            const cardObject = {
                cityName: countryArray[i],
                cityTemp: Math.round(resData.main.temp),
                cityWeather: resData.weather[0].main.toLowerCase()
            }
            cardsArray.push(cardObject);
        }
        setCityCardsData(cardsArray);

    };

    const onSearch = (value) => {
        console.log('search:', value);
    };

    return (
    <>
    <div className='dropdown'>
        <Select
            showSearch
            placeholder="Select a country"
            onChange={onChange}
            onSearch={onSearch}
            options={countriesDropdownOptions}
            style={{
                width: "40%",
            }}
        />
    </div>
        <div className='countrycard-container'>
            {cityCardsData.map((city) => (
                    <CityCard key={city.cityName} name={city.cityName} temp={city.cityTemp} weather={city.cityWeather} setCity={setCity} handleSearch={handleSearch} />
            ))}
        </div>
    </>
  )
}
