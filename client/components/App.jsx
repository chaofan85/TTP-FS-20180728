import React from "react";
import Home from "./home";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/routeUtil";
import SignupFormContainer from "./session/signupForm";
import LoginFormContainer from "./session/loginForm";

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;

// <ProtectedRoute path="/:username" component={ProfileIndexContainer} />
