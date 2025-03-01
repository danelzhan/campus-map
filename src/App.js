import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css'

import ProfileButton from './components/profile';
import NavBar from './components/nav';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const NotFound = () => <h2>404 - Page Not Found</h2>;

function App() {

  const mapRef = useRef()
  const mapContainerRef = useRef()

  const center =  [-123.25287720362316, 49.26483429335451]

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZW5sdWlhIiwiYSI6ImNtN3BuOGVsOTBva3Uyc29ucHRxOG9xMjgifQ.cPVYjBs8F4tZ_TwITYqmEg'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: 13 
      
    });

    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (
    <>
      <div id='map-container' ref={mapContainerRef}> 

        <div id='ui'>
          <Router>
            
            <ProfileButton />
          
            <NavBar id='button' />

          </Router>

          <div id='box' />

        </div>

      </div>

      <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

    </>
  )
}

export default App