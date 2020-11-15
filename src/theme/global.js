import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const theme = {
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
  containers: {
    sm: "540px",
    md: "720px",
    lg: "960px",
    xl: "1140px",
    xxl: "1320px",
  },
  columns: 12,
  gutter: 30,
};

const GlobalStyle = createGlobalStyle`
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

const GlobalThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
