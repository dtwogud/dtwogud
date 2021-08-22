import { StrictMode } from "react";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "We're Full" : "We aren't Full");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div className="App">
      <div ref={element}>
        <img src="./k.jpg"/>
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
