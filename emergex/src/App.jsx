
import './App.css'
import Introloader from './components/Introloader'
import LandingPage from './components/LandingPage'
import About from './components/About'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Traction from './components/Traction'
function App() {
  
  return (
    <ReactLenis root>
    <div  >
        <Introloader />
        <LandingPage />
        <About />
        <Traction/>
      </div>
      </ReactLenis>
  )
}

export default App
