import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./css/index.scss";
import App from "./App";
import { store } from "./store/actions";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

export const handleClick = () => console.log("click");
export const required = true;