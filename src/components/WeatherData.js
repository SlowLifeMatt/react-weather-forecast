import React from "react";

const WeatherData = (props) => {
    return (
        <div className="weather">
            <p><span>condition: </span>{props.conditions}</p>
            <p><span>time: </span>{props.time}</p>
        </div>
    );
};
export default WeatherData