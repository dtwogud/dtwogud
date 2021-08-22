import { StrictMode } from "react";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const FadeInH1 = useFadeIn(1, 3);
  const FadeInP = useFadeIn(5, 2);
  return (
    <div className="App">
      <h1 {...FadeInH1}>Hello</h1>
      <p {...FadeInP}>asdlkfasdlkfj</p>
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
