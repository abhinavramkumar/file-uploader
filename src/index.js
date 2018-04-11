import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import registerServiceWorker from "./registerServiceWorker";
import { Home } from "./screens";
import { theme } from "./ui";
import "./ui/Global.js";

const appRoot = document.getElementById("root");

const ComposedApp = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

ReactDOM.render(<ComposedApp />, appRoot);
registerServiceWorker();
