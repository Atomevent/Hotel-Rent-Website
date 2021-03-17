import React from 'react';
import ReactDOM from 'react-dom';
import "./utilities.css";
import './index.css';
import {Provider} from "react-redux";
import App from './App';
import {BrowserRouter as Router,Route} from "react-router-dom"
import store from "./redux/store.js";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

