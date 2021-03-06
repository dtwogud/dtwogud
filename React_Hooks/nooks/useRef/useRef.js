import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";

const App = () => {
  const potato = useRef();
  useEffect(() => {
    setTimeout(() => potato.current?.focus(), 2000);
  })
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potato} placeholder="hi"></input>
    </div>
  );
};