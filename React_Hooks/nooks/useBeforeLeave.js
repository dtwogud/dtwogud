// import { StrictMode } from "react";
// import React, { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.addEventListener("mouseleave", handle);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
};

// const App = () => {
//   const donbye = () => console.log("Plz don't leave");
//   useBeforeLeave(donbye);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
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
