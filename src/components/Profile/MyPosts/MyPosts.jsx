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
        <Post message='My first post' like='15'/>
        <Post message='Hy,how are you' like='6'/>
      </div>
    )
};

export default MyPosts;