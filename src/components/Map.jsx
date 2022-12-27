
import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map({data}) {
    const mapStyles = {
        height: "50vh",
        width: "100%"
      }
    
      const defaultCenter = {
        lat: data.lat, lng: data.lng
      }

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_KEY} >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map