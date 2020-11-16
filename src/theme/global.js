import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { BaseCSS } from "styled-bootstrap-grid";

const theme = {
  color: {
    primary: "#19115C",
    secondary: "#818181",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
  }

  a, a:hover {
    text-decoration: none;
  }
`;

const GlobalThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <BaseCSS />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
