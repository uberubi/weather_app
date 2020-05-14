import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <div className="App">
      <WeatherCard
        temp={-20}
        condition="Clear"
        city="Sydney"
        country="AU"
      />
      <WeatherCard
        temp={20}
        condition="Clouds"
        city="Moscow"
        country="RU"
      />
      <WeatherCard
        temp={40}
        condition="Dust"
        city="London"
        country="GB"
      />
    </div>
  );
}

export default App;