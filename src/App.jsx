import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Trial } from './components/trial/Trial'
import { FamoutCountries } from './components/famousCountry/FamoutCountries'

function App() {
  

  return (
    <>
    <FamoutCountries />
   { <Trial></Trial>  }
    </>
  )
}

export default App
