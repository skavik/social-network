import React from 'react';
import style from  './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div>
        MyPosts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <Post />
      </div>
    )
};

export default MyPosts;