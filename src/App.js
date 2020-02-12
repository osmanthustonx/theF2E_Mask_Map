import React, { useState } from 'react';
import './App.css';

// 元件
import MapContainer from './components/MapContainer';

function App() {
  const [center, setCenter] = useState({ lat: 23.8759391, lng: 120.588669 });
  const [zoom, setZoom] = useState(8);
  return (
    <div className="App">
      <MapContainer center={center} zoom={zoom} setCenter={setCenter} setZoom={setZoom} />
    </div>
  );
}

export default App;
