import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";
import LoadingIcon from "./LoadingIcon";
import axios from "axios";
import "./search.css";

export default function Search(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      main: response.data.weather[0].main,
    });
  }

  function locate() {
    let apiKey = "c789e765c19e78f4b69ede7112f55431";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    locate(city);
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Find your city..."
            onChange={handleInput}
          />
          <input
            type="Submit"
            input
            value="Search"
            className="btn btn-info btn-sm"
          />
        </form>
        <p />
        <WeatherInfo data={weatherData} />
        <p />
        <Footer />
        <p />
      </div>
    );
  } else {
    locate();
    return <LoadingIcon color="#008EBA" />;
  }
}
