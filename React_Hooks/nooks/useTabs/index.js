import { StrictMode } from "react";
import ReactDOM from "react-dom";
import useTabs from "./useTabs.js";
import React, { useState, useEffect, useRef } from "react";


const content = [
  {
    tab : "section1",
    content : "I'm the section 1"
  },
  {
    tab : "section2",
    content : "I'm the section 2"
  }
]

const App = () => {
  const {currentItem, changeItem} = useTabs(0, content)
  return(
    <div className = "App">
      {content.map(
        (section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
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
