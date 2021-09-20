import { HomeFilled } from "@ant-design/icons";
import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Context from "./pages/Context";
import Home from "./pages/Home";
import { routes } from "./pages/routes";

const App = () => {
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
        <div style={{ maxWidth: "800px", margin: "auto" }}>
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
