import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React, { useState, useEffect, useRef } from "react";
import useClick from "./useClick.js";

const App = () => {
  const onClick = () => {
    console.log("Say Hello");
  }
  const title = useClick(onClick);
  return(
    <div className="App">
      <h1 ref={title}>Hi</h1>
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
