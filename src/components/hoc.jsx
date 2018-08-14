import React from "react";
import bg from "../img/bg.jpg";
import Details from "./details";
import Form from "./form";
import Error from "./error";

const HOC = props => {
    return (
        <div className="row mb-5 mh-100">
            <div className="col-md-12">
                <div
                    className="card card-image"
                    style={{
                        backgroundImage: "url(" + bg + ")"
                    }}
                >
                    <div className="text-white text-center rgba-stylish-strong py-5 px-4">
                        <div className="py-5">
                            <h1 className="display-2">WEATHER FORECAST</h1>
                            <Form
                                getWheather={props.getWheather}
                                onCityChange={props.onCityChange}
                                searchable={props.searchable}
                                cities={props.cities}
                            />
                            {props.error ? (
                                <Error error={props.error} />
                            ) : (
                                <Details {...props.forecast} />
                            )}
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HOC;
