import React from 'react';
import style from  './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div className={style.postsBlock}> 
        <h3>MyPosts</h3>
        <div className={style.addPost}>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <Post message='My first post' like='15'/>
        <Post message='Hy,how are you' like='6'/>
      </div>
    )
};

export default MyPosts;