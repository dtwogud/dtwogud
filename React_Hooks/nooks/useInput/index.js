import { StrictMode } from "react";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput.js"

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);

  // const [item, setItem] = useState(1);
  // const increamentItem = () => setItem(item + 1);
  // const decreamentItem = () => setItem(item - 1);

  return (
    <div className="App">
      {/* <h1>Hello {item}</h1> */}
      <input placeholder="Name" {...name} />
      {/* <button onClick={increamentItem}>increament</button>
      <button onClick={decreamentItem}>decreament</button> */}
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
