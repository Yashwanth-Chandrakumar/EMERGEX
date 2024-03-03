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
import { Suspense,lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
const Scene = lazy(() => import('../public/Scene'))

function App() {

  return (
    <ReactLenis root>
      <div>
        <Introloader />
        <div>
          <Navbar />
          <LandingPage />
          <div className='threed' style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            height: '100%'
          }}>
            <Canvas>
              <ambientLight intensity={1.5} />
              <OrbitControls enableZoom={false} />
              <Suspense fallback={null}>
                <Scene/>
              </Suspense>
              <Environment preset='sunset' />
            </Canvas>
          </div>
          <About />
          <Traction />
          <Services />
          <Ecosystem />
          <Partner />
          <Objectives />
          <Comrade />
          <Gallery />
          <Footer />
        </div>
      </div>
    </ReactLenis>
  )
}

export default App
