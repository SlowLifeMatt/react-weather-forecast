import React from "react";
//i would use destructing for these but props works great too!
const WeatherIcon = ({img}) => {
    return (
        <img src={img}/>
    )
}
export default WeatherIcon;