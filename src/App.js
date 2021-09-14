import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Application</h1>
      <Search />
      <p />
      <footer>
        This application is{" "}
        <a
          href="https://github.com/ravenkmusic/shecodes-weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open sourced
        </a>{" "}
        by{" "}
        <a href="https://ravenkmusic.com" target="_blank" rel="noreferrer">
          Raven Hendricks
        </a>{" "}
        and hosted through{" "}
        <a href="https://netlify.com" target="_blank" rel="noreferrer">
          Netlify
        </a>
        .
      </footer>
      </div>
    </div>
  );
}
