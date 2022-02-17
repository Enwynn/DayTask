import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

