import { injectGlobal } from "styled-components";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700|PT+Sans:400,700');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  body {
    font-size: 1rem;
    line-height: 1.414rem;
    font-family: 'PT Sans', sans-serif;
  }
`;
