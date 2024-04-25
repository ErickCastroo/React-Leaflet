import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapaView from '../MapaView';
import Home from '../Home';
import '../MapaView/mapaView.css';

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/map" element={<MapaView />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Index;

