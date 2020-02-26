import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./routes";
import { configureStore } from "./store/configureStore";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";

let store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
