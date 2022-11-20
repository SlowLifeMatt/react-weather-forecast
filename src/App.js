import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherBody from "./WeatherForcast/weatherBody";

const weather = weatherData.map((ele, index) => {
  return <WeatherBody {...ele} key={index}/>
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
