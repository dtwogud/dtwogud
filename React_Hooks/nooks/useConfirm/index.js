import { StrictMode } from "react";
import ReactDOM from "react-dom";
import useConfirm from "./useConfirm.js";
export { useConfirm as default } from "./useConfirm";

const App = () => {
  const deleteWorld = () => {console.log("Delete the World")}
  const abort = () => {console.log("Aborted")}
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort)
  return(
    <div className="App">
      <button onClick={confirmDelete}>Delete the World</button>
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
