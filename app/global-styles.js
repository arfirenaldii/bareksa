import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: #333333;
  }

  body.fontLoaded {
    font-family: 'Montserrat', sans-serif;
    color: #333333;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Montserrat', sans-serif;
    color: #333333;
    line-height: 1.5em;
  }
`;
