import React from "react";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
import style from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? style.active : "")}
        >
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? style.active : "")}
        >
          Messages
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? style.active : "")}
        >
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? style.active : "")}
        >
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? style.active : "")}
        >
          Settings
        </NavLink>
      </div>
      <FriendsContainer store={props.store} />
    </nav>
  );
};

export default Navbar;
