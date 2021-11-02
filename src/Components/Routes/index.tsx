import React from "react";
import { BrowserRouter, HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { ROUTES } from "../../Config/routes";
import { HomePage } from "../../Pages/Home";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.HOME} component={HomePage} />
        <Redirect from="*" to={ROUTES.HOME} />
      </Switch>
    </BrowserRouter>
  );
};
