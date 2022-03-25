import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import PersonalInfo from './PersonaIInfo/PersonalInfo';
import style from  './Profile.module.css'

const Profile = () => {
    return (
      <div>
        <PersonalInfo />
        <MyPosts />
      </div>
    )
};

export default Profile;