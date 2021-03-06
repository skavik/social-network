import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.title}>
        <img src={logo} />
        <p>SOCIAL NETWORK</p>
      </div>
      <div className={style.login}>
        {props.isUnth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
