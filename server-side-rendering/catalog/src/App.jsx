import React from "react";
import ReactDOM from "react-dom";
import Catalog from "./Catalog";
import { BrowserRouter } from "react-router-dom";

const App = () => <Catalog />;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
