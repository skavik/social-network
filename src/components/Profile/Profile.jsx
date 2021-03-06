import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import PersonalInfo from "./PersonaIInfo/PersonalInfo";
import style from "./Profile.module.css";

const Profile = (props) => (
  <div>
    <PersonalInfo profile={props.profile} />
    <MyPostsContainer />
  </div>
);

export default Profile;
