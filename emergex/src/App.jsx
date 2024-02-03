import { useState } from 'react'
import './App.css'
import Introloader from './components/Introloader'
import LandingPage from './components/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Introloader />
      <LandingPage/>
    </>
  )
}

export default App
