import React from "react";
import "./styles.css";
import Search from "./Search";
import "./app.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Application</h1>
      <Search defaultCity="Baltimore" />
      <p />
      <Footer />
      <p />
    </div>
  );
}
