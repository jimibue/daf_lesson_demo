import { HomeFilled } from "@ant-design/icons";
import { PageHeader } from "antd";
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { Link, useHistory } from "react-router-dom";
import Sidemenu from "./components/Sidemenu";
import Context from "./pages/Context";
import Home from "./pages/Home";
import { routes } from "./pages/routes";

const App = () => {
  const history = useHistory();
  const renderRoutes = () => {
    return routes.map((r) => (
      <Route exact path={r.pathname} component={r.component} />
    ));
  };
  return (
    <>
      <div style={{ marginLeft: "20px" }}>
        <Link to="/" style={{ position: "fixed", top: "5px", left: "5px" }}>
          <HomeFilled />
        </Link>
        <div style={{ maxWidth: "600px", margin: "auto" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            {renderRoutes()}
            <Route exact path="/contexts" component={Context} />
            <Route component={() => <p>Not found</p>} />
          </Switch>
        </div>
      </div>
    </>
  );
};
export default App;
