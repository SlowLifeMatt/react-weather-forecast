import React from "react";
import WeatherForecast from "./WeatherForecast";

const Card = (props) => {
    return (
        <div className="weather">
            <WeatherForecast{...props} />
        </div>
    )
}

export default Card;