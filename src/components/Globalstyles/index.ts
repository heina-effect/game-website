import { fontFamily } from "style/fonts";
import { primaryColor } from "style/theme";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    height : 100%;
  }
  body {
    height : 100%;
    font-family:  ${fontFamily};
    margin: 0;
    box-sizing: border-box;
    background-color: ${primaryColor};
  }
`
export default GlobalStyles;