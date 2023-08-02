// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/global.css";
import "./Styles/box.css";
import "./Styles/button.css";
import "./Styles/display.css";
import "./Styles/font.css";
import "./Styles/form.css";
import "./Styles/navbar.css";
import { AppProvider } from "./Hooks/Context.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>,
);
