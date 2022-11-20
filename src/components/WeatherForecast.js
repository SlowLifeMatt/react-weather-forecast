import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";
//i would use destructing for these but props works great too!
const WeatherForecast = ({img, time, conditions}) => {
    return (
        <div className="weather">
            <WeatherIcon img={img}/>
            <WeatherData 
            time={time}
            conditions={conditions}/>
        </div>
    );
};

export default WeatherForecast;