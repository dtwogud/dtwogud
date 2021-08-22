import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const onClick = () => {
    console.log("Say Hello");
  }
  const title = useHover(onClick);
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
