import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.postBox}>
      <div className={style.post}>
        <img src={props.ava} className={style.ava} />
        <span>{props.message}</span>
      </div>
      <div className={style.like}>
        
        <img src="https://clipart-best.com/img/like/like-clip-art-76.png"  /> 
        {props.like}
      </div>
    </div>
  );
};

export default Post;
