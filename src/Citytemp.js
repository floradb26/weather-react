import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Citytemp() {
  return (
    <section className="Citytemp">
      <h2>
        3°C
        <span className="units">
          {" "}
          <a href="#">F°</a>|<a href="#">C°</a>
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
