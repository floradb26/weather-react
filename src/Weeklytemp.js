import React from "react";

export default function Weeklytemp() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-2">
                <div className="card-body">
                    <p class="weekday">M</p>
                    <i class="fas fa-cloud-sun"></i>
                    <br/>
                    <p class="temperature">1°C</p>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card-body">
                    <p class="weekday">T</p>
                    <i class="fas fa-cloud-sun"></i>
                    <br/>
                    <p class="temperature">3°C</p>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card-body">
                    <p class="weekday">W</p>
                    <i class="fas fa-cloud-sun"></i>
                    <br/>
                    <p class="temperature">2°C</p>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card-body">
                    <p class="weekday">T</p>
                    <i class="fas fa-cloud-sun"></i>
                    <br/>
                    <p class="temperature">4°C</p>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card-body">
                    <p class="weekday">F</p>
                    <i class="fas fa-cloud-sun"></i>
                    <br/>
                    <p class="temperature">2°C</p>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card-body">
                    <p class="weekday">S</p>
                    <i class="fas fa-cloud-sun"></i>
                    <br/>
                    <p class="temperature">3°C</p>
                </div>
            </div>
        </div>
    </div>
    );
  }