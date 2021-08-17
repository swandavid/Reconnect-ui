import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Modal from "react-modal";
import { BrowserRouter } from 'react-router-dom';

Modal.setAppElement("#root");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
