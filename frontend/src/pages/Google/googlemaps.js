
import React from 'react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";



  function Google(){
  
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        <Marker
          position={{ lat: -34.397, lng: 150.644 }}
          />
      </GoogleMap>
    ))
  
  
    
return (
  <MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB86KydfdJbRXbqRVNAW97qaGZ3KqK1crY&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>

  )
  // AIzaSyB3_-V_SF23WfYfcIWXH_13iQMoJFE9Piw  AIzaSyB86KydfdJbRXbqRVNAW97qaGZ3KqK1crY

}


export default Google;