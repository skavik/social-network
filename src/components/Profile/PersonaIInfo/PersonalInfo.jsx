import React from 'react';
import style from  './PersonalInfo.module.css'

const PersonalInfo = () => {
    return (
      <div>
        <div className={style.mainImg}>
         <img src='https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o='  />
        </div>
        <div className={style.PersonalDescripytiom}>
         <img src="https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg0NTEzNzgyNTMyNDE2OTk5/black-cat-gettyimages-901574784.jpg" />
          <div className={style.PersonalInfo}>
            <p>Slavik Sluska</p>
            <div>
              <p>Data of Birht: 6 October</p>
              <p>City: Chernivtsi</p>
              <p>Educatoin: LNu' 19</p>
              <p>Web site: https://github.com/skavik</p>
            </div>
          </div>
        </div>
      </div>
    )
};

export default PersonalInfo;