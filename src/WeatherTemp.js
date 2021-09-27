import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function converttoFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function converttoCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <div className="font-weight-bold temperature">
          {Math.round(props.celsius)}°{" "}
          <sup>
            <span className="font-weight-normal unit">
              C |{" "}
              <a href="/" onClick={converttoFahrenheit}>
                F
              </a>
            </span>
          </sup>
        </div>
        <div className="description">{props.description}</div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div>
        <div className="font-weight-bold temperature">
          {Math.round(fahrenheit)}°{" "}
          <sup>
            <span className="font-weight-normal unit">
              <a href="/" onClick={converttoCelsius}>
                C
              </a>{" "}
              | F
            </span>
          </sup>
        </div>
        <div className="overall">{props.overall}</div>
      </div>
    );
  }
}
