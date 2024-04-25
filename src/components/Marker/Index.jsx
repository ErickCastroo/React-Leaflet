import React from 'react'
import { Marker} from 'react-leaflet'
import  "../../assets/venue_location_icon.svg"
import {IconLocacion} from '../icon/iconConfig.js'




const Index = (props) => {
  const {lugares} = props

  const markers = lugares.map((lugar, i) => (
    <Marker
      key={i}
      position={lugar.geometry} 
      icon={IconLocacion}
      
    />
  ))
  return markers;
}

export default Index