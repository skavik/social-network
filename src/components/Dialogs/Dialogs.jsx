import React from "react";
import { BrowserRouter, NavLink, Route, Router } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogsData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.state.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  let sendMessage = () => {
    props.dispatch({ type: "SEND-MESSAGE" });
  };

  let newMessageText = (e) => {
    let text = e.target.value;
    props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newText: text });
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElement}</div>
      <div className={style.messages}>
        {messagesElement}
        <div>
          <textarea
            value={props.state.newMessageText}
            onChange={newMessageText}
            placeholder="Enter text "
          ></textarea>

          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
