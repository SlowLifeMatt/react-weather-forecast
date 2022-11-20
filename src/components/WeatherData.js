import React from "react";
//i would use destructing for these but props works great too!
const WeatherData = ({conditions, time}) => {
    return (
        <div className="weather">
            <p><span>condition: </span>{conditions}</p>
            <p><span>time: </span>{time}</p>
        </div>
    );
};
export default WeatherData