import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./components/root";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
