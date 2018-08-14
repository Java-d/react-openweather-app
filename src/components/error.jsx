import React from "react";

const Error = props => {
    return <div className="alert alert-danger">{props.error}</div>;
};

export default Error;
