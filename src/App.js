import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Application</h1>
      <Search />
      <p>
        This application is{" "}
        <a href="http://github.com/ravenkmusic">open sourced</a> by Raven
        Hendricks and hosted through <a href="https://netlify.com">Netlify</a>
      </p>
    </div>
  );
}
