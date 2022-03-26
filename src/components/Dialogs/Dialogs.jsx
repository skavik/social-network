import React from "react";
import { BrowserRouter, NavLink, Route, Router } from "react-router-dom";
import style from "./Dialogs.module.css";

const Dialog = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

let dialogsData = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Slavik" },
  { id: 3, name: "Anastasiia" },
  { id: 4, name: "Valerii" },
];

let dialogsElement = dialogsData.map((dialog) => (
  <Dialog name={dialog.name} id={dialog.id} />
));

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hi what happens" },
  { id: 3, message: "everything cool" },
];

let messagesElement = messagesData.map((message) => (
  <Message message={message.message} />
));

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>
        {dialogsElement}
      </div>
      <div className={style.messages}>
        {messagesElement}
      </div>
    </div>
  );
};

export default Dialogs;
