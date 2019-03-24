import React from "react";
import ReactDOM from "react-dom";

import store from './state-management/store';

import App from './App.jsx';

const renderApp = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
};

store.subscribe(renderApp);
renderApp();