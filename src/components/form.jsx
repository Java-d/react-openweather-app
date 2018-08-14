import React from "react";
import { Fa, Button } from "mdbreact/dist/mdbreact";

import CitiesDropdown from "./cities-list";

const Form = props => {
    return (
        <form onSubmit={props.getWheather}>
            <div className="row">
                <div className="col-md-9 md-form form-lg">
                    <CitiesDropdown
                        cities={props.cities}
                        onCityChange={props.onCityChange}
                    />
                </div>
                <div className="col-md-3  md-form form-lg">
                    <Button color="primary" type="submit">
                        <Fa icon="search" className="mr-1" />
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default Form;
