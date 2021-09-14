import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Application</h1>
      <Search />
      <p>
        This application is{" "}
        <a href="https://github.com/ravenkmusic/shecodes-weather-react">
          open sourced
        </a>{" "}
        by <a href="https://ravenkmusic.com">Raven Hendricks</a> and hosted through{" "}
        <a href="https://netlify.com">Netlify</a>.
      </p>
    </div>
  );
}
