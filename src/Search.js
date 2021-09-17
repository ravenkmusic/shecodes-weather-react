import React from "react";
import "./search.css";

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
      <p />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src="https://icons-for-free.com/iconfiles/png/512/cloudy+rain+sunny+weather+icon-1320196634753156841.png"
              alt="Sunny"
            />
            20°C
          </div>
          <div className="col-6">
            <ul>
              <li>Description: Cloudy</li>
              <li>Humidity: 50% </li>
              <li>Wind: 1 KM/hour </li>
            </ul>
          </div>
        </div>
        <p />
      </div>
    </div>
  );
}
