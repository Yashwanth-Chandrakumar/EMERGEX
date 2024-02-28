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
import Exit from './components/Exit'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Objectives from './components/Objectives'
import Comrade from './components/Comrade'
function App() {
  
  return (
    <ReactLenis root>
      <div>
        {/* <Router>
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/service" element={<Services />}/>
          </Routes>
        </Router> */}
        <Introloader />
        <div>
        <Navbar />

        <LandingPage />
        <About />
        <Traction />
        <Services/>
        <Ecosystem />
          <Partner />
          <Objectives />
          <Comrade/>
        <Gallery /> 
          <Footer />
          </div>
          {/* <Exit /> */}
        
      </div>
      </ReactLenis>
  )
}

export default App
