import React from "react";
import { addPostActionCreator, updateNewTextPostActionCreator } from "../../redux/profile-reducer";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  let postsElement = props.posts.postsData.map((post) => (
    <Post ava={post.ava} message={post.post} like={post.likeCount} />
  ));

  

  let addPost = () => {
    
    props.dispatch(addPostActionCreator());
  };

  let onChangePost = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewTextPostActionCreator(text));
  };

  return (
    <div className={style.postsBlock}>
      <h3>MyPosts</h3>
      <div className={style.addPost}>
        <textarea
          placeholder="Enter text post"
          value={props.posts.newPostText}
          onChange={onChangePost}
        ></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      {postsElement}
    </div>
  );
};

export default MyPosts;
