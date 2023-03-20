import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./app/store";
import "./global.css";
import TestContextProvider from "./TestContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <TestContextProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </TestContextProvider>
  </Provider>
);
