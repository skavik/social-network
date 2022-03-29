import React from 'react';
import Friend from './Friend/Friend';
import style from './Friends.module.css'




const Friends = (props) => {
  let friendsElement = props.friendsBox.map((friend) => (
    <Friend ava={friend.ava} name={friend.name} surname={friend.surname} />
  ));
    return (
      <div className={style.friends}>
        <h5>Friends</h5>
        <div className={style.friendsBox}>
            {friendsElement}
        </div>
      </div>
    )
};

export default Friends;