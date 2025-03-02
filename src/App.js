import { useRef, useEffect, useState} from 'react'
import mapboxgl from 'mapbox-gl'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css'

import ProfileButton from './components/profile_button';
import NavBar from './components/nav';
import ProfileCard from './pages/profile';
import Button from '@mui/joy/Button';

function App() {

  const mapRef = useRef()
  const mapContainerRef = useRef()

  const INITIAL_CENTER =  [-123.25470,49.26550]
  const INITIAL_ZOOM = 16.4
  const INITIAL_PITCH = 60
  

  const [center, setCenter] = useState(INITIAL_CENTER)
  const [zoom, setZoom] = useState(INITIAL_ZOOM)
  const [pitch, setPitch] = useState(45)


  

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZW5sdWlhIiwiYSI6ImNtN3BuOGVsOTBva3Uyc29ucHRxOG9xMjgifQ.cPVYjBs8F4tZ_TwITYqmEg'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-123.25470,49.26550],
      zoom: 16.4,
      pitch: 60,
      
    });

    mapRef.current.on('move', () => {
      // get the current center coordinates and zoom level from the map
      const mapCenter = mapRef.current.getCenter()
      const mapZoom = mapRef.current.getZoom()
      const mapPitch = mapRef.current.getPitch()

      // update state
      setCenter([ mapCenter.lng, mapCenter.lat ])
      setZoom(mapZoom)

      // Geolocate
      mapRef.current.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserLocation: true
        })
      )
    })

    return () => {
      mapRef.current.remove()
    }
  }, [])

  const handleButtonClick = () => {
    mapRef.current.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
      pitch: INITIAL_PITCH
    })
  }
  

  return (
    <>
      <div className="sidebar">
       Longitude: {center [0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)}
      </div>
      <Button className ='reset_button' onClick ={handleButtonClick}>
      Reset
      </Button>
      <div id='map-container' ref={mapContainerRef}> 

        <div id='ui'>
          <Router>
            
            <ProfileButton />
          
            <NavBar />

            <Routes>
            <Route path="/home" />
              <Route path="/profile" element={<ProfileCard />} />
            </Routes>

          </Router>

          <div id='box' />

        </div>

      </div>

    </>
  )
}
 
export default App