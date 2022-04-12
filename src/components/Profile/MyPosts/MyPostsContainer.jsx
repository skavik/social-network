import React from "react";
import {
  addPostActionCreator,
  updateNewTextPostActionCreator,
} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let ChangePost = (text) => {
    props.store.dispatch(updateNewTextPostActionCreator(text));
  };

  return (
    <MyPosts
      posts={state.profilePage.postsData}
      addPost={addPost}
      ChangePost={ChangePost}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
