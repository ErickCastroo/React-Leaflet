import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './home.css'

const Index = () => {
  const [locationState, setLocationState] = useState({
    longitud: 0,
    latitud: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLocationState({
          longitud: position.coords.longitude,
          latitud: position.coords.latitude,
        });
        
      },
      function (error) {
        console.log(error);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div className="container">
      <h1 className="title">Geolocalizador</h1>
      <h2>Estas son tus coordenadas</h2>
      <p className="coordinate">Longitud: {locationState.longitud}</p>
      <p className="coordinate">Latitud: {locationState.latitud}</p>

      <Link to="/map"  state = {locationState} className="link">
        Ver el mapa
      </Link>
    </div>
  );
};

export default Index;
