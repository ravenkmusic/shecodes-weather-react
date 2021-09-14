import React from "react";
import './search.css';

export default function Search() {
  let form = (
    <form>
      <input type="search" placeholder="Find your city..." />
      <input type="Submit" input value="Search" />
    </form>
  );

  return (
    <div>
      <h2>Baltimore</h2>
      {form}
        Temperature: 20°C
        <br className="description"/>Description:Cloudy
        <br />Humidity: 50%
        <br />Wind: 1 KM/hour
        <p />
        <div className="forecast">
          <div className="row">
          <div className="col-3">Sunday</div>
          <div className="col-3">Monday</div>
          <div className="col-3">Tuesday</div>
          <div className="col-3">Wednesday</div>
          <div className="col-3">Thursday</div>
          <div className="col-3">Friday</div>
          <div className="col-3">Saturday</div>          
          </div>
        </div>
    </div>
  );
}
