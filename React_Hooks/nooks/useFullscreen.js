// import { StrictMode } from "react";
// import React, { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen !== null) {
      document.exitFullscreen();
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      runCb(false);
    }
  };
  return { element, triggerFull, exitFull };
};

// const App = () => {
//   const onFulls = (isFull) => {
//     console.log(isFull ? "We're Full" : "We aren't Full");
//   };
//   const { element, triggerFull, exitFull } = useFullscreen(onFulls);
//   return (
//     <div className="App">
//       <div ref={element}>
//         <img src="./k.jpg"/>
//         <button onClick={exitFull}>Exit Fullscreen</button>
//       </div>
//       <button onClick={triggerFull}>Make Fullscreen</button>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );
