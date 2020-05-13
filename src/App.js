import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-20} condition="Clear"/>
      <WeatherCard temp={20} condition="Clouds"/>
      <WeatherCard temp={40} condition="Dust"/>
    </div>
  );
}

export default App;