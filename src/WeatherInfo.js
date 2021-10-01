import React from "react";
import Today from "./Today";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <h3>{props.data.city}</h3>
      <p />
      <Today date={props.data.date} />
      <p />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="float-left">
              <WeatherTemp
                celsius={props.data.temperature}
                description={props.data.description}
              />
            </div>
          </div>
          <div className="col-4">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
          <div className="col-4">
            <ul>
              <li>Looks like: {props.data.main}</li>
              <li>Humidity: {Math.round(props.data.humidity)}% </li>
              <li>Wind: {Math.round(props.data.wind)} KM/hour </li>
            </ul>
          </div>
          <hr />
          <Forecast />
        </div>
      </div>
    </div>
  );
}
