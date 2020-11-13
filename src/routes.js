import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTER } from "constants/Router";
import Home from "pages/home";
import Detail from "pages/detail";
import Cart from "pages/cart";
import NotFound from "pages/notFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTER.DETAIL} component={Detail} />
        <Route exact path={ROUTER.CART} component={Cart} />
        <Route exact path={ROUTER.HOME} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
