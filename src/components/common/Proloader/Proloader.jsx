import React from "react";
import loading from "../../../assets/img/loading.svg";
import style from "./Proloader.module.css";

let Proloader = (props) => {
  return (
    <div className={style.proloader}>
      <img src={loading} />;
    </div>
  );
};

export default Proloader;
