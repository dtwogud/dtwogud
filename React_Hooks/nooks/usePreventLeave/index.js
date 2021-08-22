import { StrictMode } from "react";
import ReactDOM from "react-dom";
import usePreventLeave from "./usePreventLeave.js";
export { usePreventLeave as default } from "./usePreventLeave";

const App = () => {
  const {enablePrevent, disablePrevent} = usePreventLeave();
  return(
    <div className="App">
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
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
