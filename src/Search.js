import React from "react";
import './search.css';

export default function Search() {
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

  return (
    <div>
      <h3>Baltimore</h3>
      <p />
      5:00 PM
      <p />
      {form}
        Temperature: 20°C
        <br className="description"/>Description:Cloudy
        <br />Humidity: 50%
        <br />Wind: 1 KM/hour
        <p />
          <div className="row">
          <div className="col-2">Monday</div>
          <div className="col-2">Tuesday</div>
          <div className="col-2">Wednesday</div>
          <div className="col-2">Thursday</div>
          <div className="col-2">Friday</div>
        </div>
    </div>
  );
}
