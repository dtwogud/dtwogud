// import { StrictMode } from "react";
// import React, { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

export const useScroll = () => {
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);
  const onscroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
    console.log("Y", window.scrollY, "X", window.scrollX);
  };
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  return state;
};

// const App = () => {
//   const { y } = useScroll();
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
//         hello
//       </h1>
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
