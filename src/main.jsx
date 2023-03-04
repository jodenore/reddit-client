import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./global.css";
import TestContextProvider from "./TestContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TestContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </TestContextProvider>
);
