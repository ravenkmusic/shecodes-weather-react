import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "c789e765c19e78f4b69ede7112f55431";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="fw-bold fs-5 weekday">Monday</div>
          <WeatherIcon code="01d" size="30" />
          <div className="forecast-max-min-temp">
            <span className="forecast-temp-max">24°</span>{" "}
            <span className="forecast-temp-min">19°</span>
          </div>
        </div>
        <div className="col">
          <div className="fw-bold fs-5 weekday">Tuesday</div>
          <WeatherIcon code="01d" size="30" />
          <div className="forecast-max-min-temp">
            <span className="forecast-temp-max">24°</span>{" "}
            <span className="forecast-temp-min">19°</span>
          </div>
        </div>
        <div className="col">
          <div className="fw-bold fs-5 weekday">Wednesday</div>
          <WeatherIcon code="01d" size="30" />
          <div className="forecast-max-min-temp">
            <span className="forecast-temp-max">24°</span>{" "}
            <span className="forecast-temp-min">19°</span>
          </div>
        </div>
        <div className="col">
          <div className="fw-bold fs-5 weekday">Thursday</div>
          <WeatherIcon code="01d" size="30" />
          <div className="forecast-max-min-temp">
            <span className="forecast-temp-max">24°</span>{" "}
            <span className="forecast-temp-min">19°</span>
          </div>
        </div>
        <div className="col">
          <div className="fw-bold fs-5 weekday">Friday</div>
          <WeatherIcon code="01d" size="30" />
          <div className="forecast-max-min-temp">
            <span className="forecast-temp-max">24°</span>{" "}
            <span className="forecast-temp-min">19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
