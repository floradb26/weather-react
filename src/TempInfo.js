import React from "react";

import './App.css';

export default function Tempinfo() {
  return (
    <div className="Tempinfo">
      <h1>
        Brussels
        <div>10:00 AM</div>
        <div>Clouds</div>
      </h1>
      <h3>
        <div>Rain: 1%</div>
        <div>Humidity: 51%</div>
        <div>Wind: 11 km/h</div>
      </h3>
    </div>
  );
}
