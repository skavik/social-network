import React from "react";
import Friends from "./Friends";

const FriendsContainer = (props) => {
  let state = props.store.getState();

  return <Friends friendsBox={state.navbar.friendsBox} />;
};

export default FriendsContainer;
