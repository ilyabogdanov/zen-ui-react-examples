import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./skeleton/App";
import { Logger, LEVEL } from "zen-ui-react";
Logger.level = LEVEL.OFF;

require("zen-ui-core");
require("./index.scss");

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app")
);

