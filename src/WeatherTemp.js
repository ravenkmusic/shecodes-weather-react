import React from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  return (
    <div>
      <div className="font-weight-bold temperature">
        {Math.round(props.celsius)}
        <sup><span className="unit">°C</span></sup>
      </div>
      <div>
        <div className="description">{props.description}</div>
        <div className="overall">{props.overall}</div>
      </div>
    </div>
  );
}
