import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/routeUtil";
import Header from "./header/header";
import Home from "./home";
import SignupFormContainer from "./session/signupForm";
import LoginFormContainer from "./session/loginForm";

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;

// <ProtectedRoute path="/:username" component={ProfileIndexContainer} />
