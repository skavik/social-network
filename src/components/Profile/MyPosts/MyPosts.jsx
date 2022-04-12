import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map((post) => (
    <Post ava={post.ava} message={post.post} like={post.likeCount} />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let onChangePost = (e) => {
    let text = e.target.value;
    props.ChangePost(text);
  };
 
  return (
    <div className={style.postsBlock}>
      <h3>MyPosts</h3>
      <div className={style.addPost}>
        <textarea
          placeholder="Enter text post"
          value={props .newPostText}
          onChange={onChangePost}
        ></textarea>
        <button onClick={onAddPost}>Add post</button>
      </div>
      {postsElement}
    </div>
  );
};

export default MyPosts;
