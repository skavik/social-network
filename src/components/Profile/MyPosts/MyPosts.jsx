import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
  { id: 1, post: "My first post", likeCount: 15 },
  { id: 2, post: "Hy, how are you", likeCount: 6 },
];

let postsElement = postsData.map((post) => (
  <Post message={post.post} like={post.likeCount} />
));

const MyPosts = () => {
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
