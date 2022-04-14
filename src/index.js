import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./components/redux/redux-store";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

let rerenderReactTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderReactTree();

store.subscribe(rerenderReactTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
