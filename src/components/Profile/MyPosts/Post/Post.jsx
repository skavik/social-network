import React from 'react';
import style from  './Post.module.css'

const Post = (props) => {
    return (
      <div>
        <img src=""  />
        {props.message}
        <div>
          <span>like</span> {props.like}
        </div>
      </div>
    )
};

export default Post;