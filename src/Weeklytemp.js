import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weeklytemp() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-2">
                <div className="card-body">
                    <p class="weekday">M</p>
                    <ReactAnimatedWeather
                        icon="RAIN"
                        color="#e0c3fc"
                        size={23}
                        animate={true}
                    />
                    <br/>
                    <p class="temperature">1°C</p>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card-body">
                    <p class="weekday">T</p>
                    <ReactAnimatedWeather
                        icon="FOG"
                        color="#e0c3fc"
                        size={23}
                        animate={true}
                    />
                    <br/>
                    <p class="temperature">3°C</p>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card-body">
                    <p class="weekday">W</p>
                    <ReactAnimatedWeather
                        icon="WIND"
                        color="#e0c3fc"
                        size={23}
                        animate={true}
                    />
                    <br/>
                    <p class="temperature">2°C</p>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card-body">
                    <p class="weekday">T</p>
                    <ReactAnimatedWeather
                        icon="RAIN"
                        color="#e0c3fc"
                        size={23}
                        animate={true}
                    />
                    <br/>
                    <p class="temperature">4°C</p>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card-body">
                    <p class="weekday">F</p>
                    <ReactAnimatedWeather
                        icon="CLOUDY"
                        color="#e0c3fc"
                        size={23}
                        animate={true}
                    />
                    <br/>
                    <p class="temperature">2°C</p>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card-body">
                    <p class="weekday">S</p>
                    <ReactAnimatedWeather
                        icon="WIND"
                        color="#e0c3fc"
                        size={23}
                        animate={true}
                    />
                    <br/>
                    <p class="temperature">3°C</p>
                </div>
            </div>
        </div>
    </div>
    );
  }