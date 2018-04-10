import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal, ThemeProvider } from "styled-components";
import registerServiceWorker from "./registerServiceWorker";
import { Home } from "./screens";
import { theme } from "./ui";

const appRoot = document.getElementById("root");

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  @font-face {
    font-family: 'PT Sans Bold',
    src: url("./fonts/PT_Sans/PT_Sans-Web-Bold.ttf")
  }
  @font-face {
    font-family: 'PT Sans',
    src: url("./fonts/PT_Sans/PT_Sans-Web-Regular.ttf")
  }
  @font-face {
    font-family: 'PT Sans Narrow Bold',
    src: url("./fonts/PT_Sans_Narrow/PT_Sans-Narrow-Web-Bold.ttf")
  }
  @font-face {
    font-family: 'PT Sans Narrow',
    src: url("./fonts/PT_Sans_Narrow/PT_Sans-Narrow-Web-Regular.ttf")
  }
`;

const composedApp = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

ReactDOM.render(<composedApp />, appRoot);
registerServiceWorker();
