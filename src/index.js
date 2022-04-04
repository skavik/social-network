
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./components/redux/state";
import "./index.css";
import App from "./App";

let renderReactTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getStore()}
        addPost={store.addPost.bind(store)}
        updateNewTextPost={store.updateNewTextPost.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
        sendMessage={store.sendMessage.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};


renderReactTree();



store.observer(renderReactTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
