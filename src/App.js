import React from "react";
import Router from "routes";
import { HelmetProvider } from "react-helmet-async";
import GlobalThemeProvider from "theme/global";
import CartProvider from "contexts/CartContext";

function App() {
  return (
    <HelmetProvider>
      <GlobalThemeProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </GlobalThemeProvider>
    </HelmetProvider>
  );
}

export default App;
