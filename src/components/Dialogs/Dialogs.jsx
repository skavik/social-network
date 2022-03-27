import React from "react";
import { BrowserRouter, NavLink, Route, Router } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.dialogs.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElement}</div>
      <div className={style.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
