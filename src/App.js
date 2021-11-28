import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="cardHeader">
          <Weather city="Brussels"/>
        </div>
      </div>
    </div>
  );
}

export default App;
