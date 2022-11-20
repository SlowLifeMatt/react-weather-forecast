import React from "react";

import Card from "./WeatherCard";
import WeatherIcon from "./WeatherIcon";

const WeatherForecast = (props) => {
    return (
        <div className="weather">
            <WeatherIcon img={props.img}/>
            <p><span>condition: </span>{props.conditions}</p>
            <p><span>time: </span>{props.time}</p>
        </div>
    );
};

export default WeatherForecast;