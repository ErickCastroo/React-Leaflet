import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useLocation } from "react-router-dom";
import Marker from '../Marker';
import { lugares } from '../../assets/data.json';
import 'leaflet/dist/leaflet.css';

const Index = () => {

  const [locations, setLocations] = useState({
    currentLocation: { lat: 52.52437, lng: 13.41053 },
    zoom: 21,
  });

  const {state} = useLocation();

  useEffect(() => {
    if (state.latitud && state.longitud) {
      const currentLocation = {
        lat: state.latitud,
        lng: state.longitud,
      };
      setLocations({ ...locations, currentLocation });
    }
  }, []);

  return (
    <MapContainer key={`${locations.currentLocation.lat}-${locations.currentLocation.lng}`}  center={locations.currentLocation} zoom={locations.zoom}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker lugares={lugares} />
    </MapContainer>
  );
};


export default Index;
