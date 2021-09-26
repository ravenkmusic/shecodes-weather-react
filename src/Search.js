import React, { useState } from "react";
import axios from "axios";
import "./search.css";

export default function Search(props) {
  const [loaded, setLoaded] = useState(null);
  const [weatherInfo, setweatherInfo] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setweatherInfo({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconURL: `https://icons-for-free.com/iconfiles/png/512/cloudy+rain+sunny+weather+icon-1320196634753156841.png`,
    });
    setLoaded(true);
  }

  let form = (
    <form>
      <input type="search" placeholder="Find your city..." />
      <input
        type="Submit"
        input
        value="Search"
        className="btn btn-info btn-sm"
      />
    </form>
  );

  if (loaded) {
    return (
      <div>
        <h3>{props.city}</h3>
        <p />
        5:00 PM
        <p />
        {form}
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
