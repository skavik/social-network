import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.postsData.map((post) => (
    <Post ava={post.ava} message={post.post} like={post.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'ADD-POST'});
  };

  let onChangePost = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-TEXT-POST', newText: text});
  };

  return (
    <div className={style.postsBlock}>
      <h3>MyPosts</h3>
      <div className={style.addPost}>
        <textarea
          ref={newPostElement}
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
