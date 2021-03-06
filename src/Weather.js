import React from "react";
import Form from "./Form";
import Maintemp from "./Maintemp";
import Citytemp from "./Citytemp";
import Weeklytemp from "./Weeklytemp";
import axios from "axios";

import './App.css';

export default function Weather(props){

function displayWeather(response){

alert(`The weather in ${response.data.name} is ${response.data.main.temp}`)
}
let apiKey = "2de757d719affbba26c5f5c558d276fc";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayWeather);


return (
    <div className="Weather">
      <Form />
      <Maintemp />
      <Citytemp />
      <Weeklytemp />
    </div>
  );

}