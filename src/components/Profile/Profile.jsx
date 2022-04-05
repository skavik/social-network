import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import PersonalInfo from './PersonaIInfo/PersonalInfo';
import style from  './Profile.module.css'

const Profile = (props) => {
    return (
      <div>
        <PersonalInfo />
        <MyPosts posts={props.posts} dispatch={props.dispatch} />
      </div>
    )
};

export default Profile;