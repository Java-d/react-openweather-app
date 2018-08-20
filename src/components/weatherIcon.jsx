import React from "react";

const WeatherIcon = props => {
    return (
        <img
            alt=""
            src={
                "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/" +
                props.icon +
                ".png"
            }
            height="128"
        />
    );
};

export default WeatherIcon;
