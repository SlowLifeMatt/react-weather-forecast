import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast";

const weather = weatherData.map((ele, index) => {
  return <WeatherForecast {...ele} key={index}/>
})
console.log(weather)
export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section className="weather">
        {weather}
        </section> 
    </div>
  );
}
