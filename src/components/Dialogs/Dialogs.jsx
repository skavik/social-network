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

  let newMessageElement = React.createRef()

  let sendMessage = () => {
    let text = newMessageElement.current.value;
    props.sendMessage(text)
  }

  let onChangeMessage = () => {
    let text = newMessageElement.current.value;
    props.updateNewTextMessage(text)
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElement}</div>
      <div className={style.messages}>
        {messagesElement}
        <div>
          <textarea ref={newMessageElement}
          onChange={onChangeMessage} 
          value={props.state.newMessageText}>
          </textarea>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
