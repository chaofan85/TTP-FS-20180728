import React from "react";
import Home from "./home";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;

// <ProtectedRoute path="/:username" component={ProfileIndexContainer} />
