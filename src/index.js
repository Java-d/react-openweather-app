import React from "react";
import ReactDOM from "react-dom";

import Weather from "./containers/weather";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Weather />, document.getElementById("root"));
registerServiceWorker();
