import React from "react";
import {
  sentMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sentMessageActionCreator());
  };

  let updateMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      sendMessage={sendMessage}
      updateMessageText={updateMessageText}
      dialogsData={state.dialogsPage.dialogsData}
      messagesData={state.dialogsPage.messagesData}
      newMessageText= {state.dialogsPage.newMessageText}
    />
  );
};

export default DialogsContainer;
