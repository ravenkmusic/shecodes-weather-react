import React from "react";
import Today from "./Today";

export default function WeatherInfo(props) {
  return (
    <div>
      <h3>{props.data.city}</h3>
      <p />
      <Today date={props.data.date} />
      <p />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ul>
              <li className="font-weight-light text-left">
                <img src={props.data.iconURL} alt={props.data.description}/>
                {Math.round(props.data.temperature)}°C
              </li>
              <li className="description">{props.data.description}</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {Math.round(props.data.humidity)}% </li>
              <li>Wind: {Math.round(props.data.wind)} KM/hour </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
