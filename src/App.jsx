import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Trial } from './components/trial/Trial'
import { FamoutCountries } from './components/famousCountry/FamoutCountries'
import { WeatherMain } from './components/weatherMain/weatherMain'

function App() {
  

  return (
    <>
    {/* <FamoutCountries /> */}
   {/* { <Trial></Trial>  } */}
   <WeatherMain />
    </>
  )
}

export default App
