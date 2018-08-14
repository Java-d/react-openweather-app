import React from "react";
import WeatherIcon from "./weatherIcon";

const Details = props => {
    console.log(props);
    return (
        <div className="row">
            <div className="col-md-6">
                <h1 className="display-1">{props.temperature} &#8451;</h1>
                <WeatherIcon />
            </div>
            <div className="col-md-6">
                <h3>
                    {props.city}, {props.country}
                </h3>
                <p>Clouds : {props.clouds}%</p>
                <p>Humidity : {props.humidity}%</p>
                <p>Description : {props.description}</p>
                <p>
                    Wind:
                    {props.wind !== undefined && (
                        <span> {props.wind.speed} m/s, </span>
                    )}
                    {props.wind !== undefined && (
                        <span> {props.wind.deg} &#176;</span>
                    )}
                </p>
                <p>Pressure: {props.pressure}</p>
            </div>
        </div>
    );
};

export default Details;
