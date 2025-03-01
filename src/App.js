import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css'

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
      <div id='map-container' ref={mapContainerRef}/>
    </>
  )
}

export default App