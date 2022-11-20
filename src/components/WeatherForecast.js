import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";
const WeatherForecast = (props) => {
    return (
        <div className="weather">
            <WeatherIcon img={props.img}/>
            <WeatherData 
            time={props.time}
            conditions={props.conditions}/>
        </div>
    );
};

export default WeatherForecast;