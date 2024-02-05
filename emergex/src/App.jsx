
import './App.css'
import Introloader from './components/Introloader'
import LandingPage from './components/LandingPage'
import About from './components/About'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
function App() {
  
  return (
    <ReactLenis root>
    <div  >
      <Introloader />
      <LandingPage />
      <About/>
      </div>
      </ReactLenis>
  )
}

export default App
