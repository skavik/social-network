import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";





const MyPosts = (props) => {
  let postsElement = props.posts.map((post) => (
    <Post ava={post.ava} message={post.post} like={post.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={style.postsBlock}>
      <h3>MyPosts</h3>
      <div className={style.addPost}>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      {postsElement}
    </div>
  );
};

export default MyPosts;
