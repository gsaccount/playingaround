import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from './App';
import "./index.css";
import 'tachyons';
import {robots} from './robots.js'; //{} here in case we have other stucture like Cats ..



//Remeber to return only one element inside render, use <div>
ReactDOM.render(
  <App/>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
