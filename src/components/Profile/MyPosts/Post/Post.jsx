import React from 'react';
import style from  './Post.module.css'

const Post = (props) => {
    return (
      <div>
        <img src={props.ava} className={style.ava} />
        {props.message}
        <div>
          <span>like</span> {props.like}
        </div>
      </div>
    )
};

export default Post;