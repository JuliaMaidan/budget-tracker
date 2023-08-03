import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./sass/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/budget-tracker">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
