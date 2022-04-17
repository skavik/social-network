import React from "react";
import { connect } from "react-redux";
import {
  sentMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../redux/dialogs-reducer";

import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sentMessageActionCreator());
    },
    updateMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
