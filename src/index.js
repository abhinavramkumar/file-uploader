import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Home } from "./screens";

const appRoot = document.getElementById("root");

ReactDOM.render(<Home />, appRoot);
registerServiceWorker();
