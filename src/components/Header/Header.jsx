import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} />
      <p>SOCIAL NETWORK</p>
    </header>
  );
};

export default Header;
