import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Citytemp() {
  return (
    <section className="Citytemp">
      <h2>
        3°C
        <span className="units">
          {" "}
          <a href="https://github.com/floradb26/weather-react">F°</a>|<a href="https://github.com/floradb26/weather-react">C°</a>
        </span>
        <ReactAnimatedWeather
        icon="RAIN"
        color="#e0c3fc"
        size={75}
        animate={true}
      />
      </h2>
    </section>
  );
}
