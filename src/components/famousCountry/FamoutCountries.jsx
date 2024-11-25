import React from 'react'
import './FamoutCountries.css'
// import { countries } from '../constants/constants';

export const FamoutCountries = () => {
    return (
      <div className='container'> 
        {countries?.map((country, index) => (
          <div key={'${country}-${index}' }className="country-card">{country}</div>
        ))}
      </div>
    );
  };
