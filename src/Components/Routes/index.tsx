import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { ROUTES } from "../../Config/routes";
import { FrotaPage } from "../../Pages/Frota";
import { HomePage } from "../../Pages/Home";
import { InfraPage } from "../../Pages/Infra";

export const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.FROTA} component={FrotaPage} />
        <Route path={ROUTES.INFRA} component={InfraPage} />
        <Redirect from="*" to={ROUTES.HOME} />
      </Switch>
    </HashRouter>
  );
};
