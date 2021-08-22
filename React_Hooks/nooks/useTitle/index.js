import { StrictMode } from "react";
import ReactDOM from "react-dom";
import useTabs from "./useTabs.js";
import React, { useState, useEffect, useRef } from "react";
import useTitle from "./useTitle.js";

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {titleUpdater("Home")},5000);
  return(
    <div className="App">
      <h1>Hi</h1>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
