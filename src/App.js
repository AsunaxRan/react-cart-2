import React from "react";
import Router from "routes";
import { HelmetProvider } from "react-helmet-async";
import GlobalThemeProvider from "theme/global";

function App() {
  return (
    <HelmetProvider>
      <GlobalThemeProvider>
        <Router />
      </GlobalThemeProvider>
    </HelmetProvider>
  );
}

export default App;
