import './App.css'
import Introloader from './components/Introloader'
import LandingPage from './components/LandingPage'
import About from './components/About'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Traction from './components/Traction'
import Services from './components/Services'
import Partner from './components/Partner'
import Ecosystem from './components/Ecosystem'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  
  return (
    <ReactLenis root>
    <div>
        <Introloader />
        <LandingPage />
        <About />
        <Traction />
        <Services />
        <Ecosystem />
        <Partner />
        {/* <Gallery/> */}
        <Footer />
      </div>
      </ReactLenis>
  )
}

export default App
