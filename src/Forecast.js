import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="fw-bold fs-5 weekday">Monday</div>
          <WeatherIcon code="01d" size="30" />
          <div className="forecast-max-min-temp">
            <span className="forecast-temp-max">24</span>{" "}
            <span className="forecast-temp-min">19</span>
          </div>
        </div>
        <div className="col">
          <div className="fw-bold fs-5 weekday">Tuesday</div>
          <WeatherIcon code="01d" size="30" />
          <div className="forecast-max-min-temp">
            <span className="forecast-temp-max">24</span>{" "}
            <span className="forecast-temp-min">19</span>
          </div>
        </div>
        <div className="col">
          <div className="fw-bold fs-5 weekday">Wednesday</div>
          <WeatherIcon code="01d" size="30" />
          <div className="forecast-max-min-temp">
            <span className="forecast-temp-max">24</span>{" "}
            <span className="forecast-temp-min">19</span>
          </div>
        </div>
        <div className="col">
          <div className="fw-bold fs-5 weekday">Thursday</div>
          <WeatherIcon code="01d" size="30" />
          <div className="forecast-max-min-temp">
            <span className="forecast-temp-max">24</span>{" "}
            <span className="forecast-temp-min">19</span>
          </div>
        </div>
        <div className="col">
          <div className="fw-bold fs-5 weekday">Friday</div>
          <WeatherIcon code="01d" size="30" />
          <div className="forecast-max-min-temp">
            <span className="forecast-temp-max">24</span>{" "}
            <span className="forecast-temp-min">19</span>
          </div>
        </div>
      </div>
    </div>
  );
}
