import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "pages/home";
import Detail from "pages/detail";
import Cart from "pages/cart";
import NotFound from "pages/notFound";
import Styleguides from "pages/styleguides";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/detail/:slug" component={Detail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/styleguides" component={Styleguides} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
