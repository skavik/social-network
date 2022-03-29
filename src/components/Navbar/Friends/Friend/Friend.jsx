import React from 'react';
import style from './Friend.module.css'




const Friend = (props) => {
  return (
      
    <div className={style.friend}>
          <img src={props.ava}  />
          <span>{`${props.name} ${props.surname}`}</span> 
    </div>
     
  )
};

export default Friend;