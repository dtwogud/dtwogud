// import { StrictMode } from "react";
// import React, { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      console.log(element.current);
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};

// const App = () => {
//   const FadeInH1 = useFadeIn(1, 3);
//   const FadeInP = useFadeIn(5, 2);
//   return (
//     <div className="App">
//       <h1 {...FadeInH1}>Hello</h1>
//       <p {...FadeInP}>asdlkfasdlkfj</p>
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
