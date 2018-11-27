import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/routeUtil";
import Header from "./header/header";
import Home from "./home";
import TransactionHistory from "./transaction/transactionHistory";

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <ProtectedRoute path="/history" component={TransactionHistory} />
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
