import React from "react";

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
      <ul>
        <li>Temperature: 20°C</li>
        <li className="description">Description:Cloudy</li>
        <li>Humidity: 50%</li>
        <li>Wind: 1 KM/hour</li>
      </ul>
    </div>
  );
}
