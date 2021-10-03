import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
    
    function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

        return days[day];
    };

  return (
    <div>
      <div className="fw-bold fs-5 weekday">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size="30" />
      <div className="forecast-max-min-temp">
        <span className="forecast-temp-max">
          {Math.round(props.data.temp.max)}°
        </span>{" "}
        <span className="forecast-temp-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
