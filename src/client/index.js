/*
  This application is built on ReactJS Framework and uses Redux for state management.
  ReduxDevTools is added for making life easier.
  Express Server is used for retrieving dynamic data from Netbuttik API Server (Check Server folder). 
*/
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/index";

/* Import App style */
import "./index.scss";

import App from "./App";

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
