import React from 'react';
import style from  './Post.module.css'

const Post = (props) => {
    return (
      <div className={style.postsBox}>
        <div className={style.posts}>
        <img src={props.ava} className={style.ava} />
        {props.message}
        </div>
        <div className={style.like}>
          <span>like</span> {props.like}
        </div>
      </div>
    )
};

export default Post;