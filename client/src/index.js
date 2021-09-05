import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore()
ReactDOM.render(<App />, document.getElementById("root"));
