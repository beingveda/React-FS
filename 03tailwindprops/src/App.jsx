import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cards from './components/Cards.jsx'

function App() {
  return (
  <>
  <Cards username="Vedant" btnText="Click me"/>
  <Cards username="Hitesh" btnText="Visit me"/>
  </>
  )
}

export default App
