import { StrictMode } from "react";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import k from "./k.jpg";

const App = () => {
  const triggerNotif = useNotification("Hello mo'fucker?", {
    body: "i want money"
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Notification</button>
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
