import React from "react";
import Proloader from "../../common/Proloader/Proloader";
import style from "./PersonalInfo.module.css";

const PersonalInfo = (props) => {
  if (!props.profile) {
    return <Proloader />;
  }

  return (
    <div>
      <div className={style.mainImg}>
        <img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o=" />
      </div>
      <div className={style.PersonalDescripytiom}>
        <img src={props.profile.photos.small} />
        <div className={style.PersonalInfo}>
          <p className={style.name}>{props.profile.fullName}</p>
          <div className={style.info}>
            <p>Data of Birht: 6 October</p>
            <p>City: Chernivtsi</p>
            <p>Educatoin: LNu' 19</p>
            <p>Web site: https://github.com/skavik</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
