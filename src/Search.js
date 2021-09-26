import React, { useState } from "react";
import todaysDate from "./todaysDate";
import axios from "axios";
import "./search.css";

export default function Search(props) {
  let [weatherInfo, setweatherInfo] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setweatherInfo({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherInfo.loaded) {
    return (
      <div className="complete">
        <h3>{props.city}</h3>
        <p />
        <todaysDate date={weatherInfo.date} />
        <p />
        <form>
          <input type="search" placeholder="Find your city..." />
          <input
            type="Submit"
            input
            value="Search"
            className="btn btn-info btn-sm"
          />
        </form>
        <p />
        <div className="container">
          <div className="row">
            <div className="col-6">{Math.round(weatherInfo.temperature)}°C</div>
            <div className="col-6">
              <ul>
                <li className="description">
                  Description: {weatherInfo.description}
                </li>
                <li>Humidity: {Math.round(weatherInfo.humidity)}% </li>
                <li>Wind: {Math.round(weatherInfo.wind)} KM/hour </li>
              </ul>
            </div>
          </div>
          <p />
        </div>
      </div>
    );
  } else {
    const apiKey = "c789e765c19e78f4b69ede7112f55431";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  return "Loading...";
}
