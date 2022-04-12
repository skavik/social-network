import React from "react";
import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.dialogsData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onNewMessageText = (e) => {
    let text = e.target.value;
    props.updateMessageText(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElement}</div>
      <div className={style.messages}>
        {messagesElement}
        <div>
          <textarea
            value={props.newMessageText}
            onChange={onNewMessageText}
            placeholder="Enter text "
          ></textarea>

          <button onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
