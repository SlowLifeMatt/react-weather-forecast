import React from "react";


const WeatherBody = ({img, conditions, time}) => {
    return (
        <div className="weather-body">
            <h5 className="weather-img">{img}</h5>
            <h3 className="weather-conditions">{conditions}</h3>
            <h3 className="weather-time">{time}</h3>
        </div>
    );
};

export default WeatherBody;