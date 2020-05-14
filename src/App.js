import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";

const App = () => {

  const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3c5c33d4640921eb2db5d4cfeba9cd1e"
    );
    const resJSON = await apiRes.json()
    return resJSON
  };
  
  data().then(res => {
    console.log(res)
    console.log('the feels like is ' + res.main.feels_like)
    console.log('the temp is ' + res.main.temp)
  })
 
  return (
    <div className="App">
      <WeatherCard temp={-20} condition="Clear" city="Sydney" country="AU" />
      <WeatherCard temp={20} condition="Clouds" city="Moscow" country="RU" />
      <WeatherCard temp={40} condition="Dust" city="London" country="GB" />
    </div>
  );
};

export default App;
