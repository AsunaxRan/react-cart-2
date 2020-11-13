import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  // You can continue writing global styles here
  body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
  }

  a, a:hover {
    text-decoration: none;
  }
`;
