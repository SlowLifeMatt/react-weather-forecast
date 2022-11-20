import React from "react";
import WeatherBody from "./weatherBody";

const Card = (props) => {
    return (
        <div className="card">
            <WeatherBody {...props} />
        </div>
    )
}

export default Card;