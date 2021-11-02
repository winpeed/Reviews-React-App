import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import Footer from "./components/review/Footer";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
