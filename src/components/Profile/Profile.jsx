import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from  './Profile.module.css'

const Profile = () => {
    return (
      <div className={style.content}>
        <div>
         <img src='https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o='  />
        </div>
        <div>
          ava + descripyion
        </div>
        <MyPosts />
      </div>
    )
};

export default Profile;