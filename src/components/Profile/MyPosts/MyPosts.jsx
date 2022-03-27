import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";





const MyPosts = (props) => {
  let postsElement = props.posts.map((post) => (
    <Post message={post.post} like={post.likeCount} />
  ));

  return (
    <div className={style.postsBlock}>
      <h3>MyPosts</h3>
      <div className={style.addPost}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      {postsElement}
    </div>
  );
};

export default MyPosts;
