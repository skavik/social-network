import React from "react";
import { BrowserRouter, NavLink, Route, Router } from "react-router-dom";
import style from "./../Dialogs.module.css";

const Dialog = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};


export default Dialog;
