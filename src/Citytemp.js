import React from "react";

export default function Citytemp() {
  return (
    <section className="Citytemp">
      <h2>
        8°C
        <span className="units">
          {" "}
          <a href="#">F°</a>|<a href="#">C°</a>
        </span>
        <i className="fas fa-cloud"></i>
      </h2>
    </section>
  );
}
