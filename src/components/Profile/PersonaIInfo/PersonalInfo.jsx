import React from 'react';
import style from  './PersonalInfo.module.css'

const PersonalInfo = () => {
    return (
      <div>
        <div className={style.mainImg}>
         <img src='https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o='  />
        </div>
        <div className={style.PersonalDescripytiom}>
          ava + descripytion
        </div>
      </div>
    )
};

export default PersonalInfo;