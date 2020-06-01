import React from "react";
import ReactDOM from "react-dom";

import Weather from "./containers/Weather";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Weather />, document.getElementById("root"));
registerServiceWorker();
