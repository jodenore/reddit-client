import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
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
