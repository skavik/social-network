import React from "react";
import { connect } from "react-redux";
import Friends from "./Friends";


let mapStateToProps = (state) => {
  return {
    friendsBox: state.navbar.friendsBox
  }
}

let mapDispatchToProps = (dispatch) => {

}

const FriendsContainer = connect (mapStateToProps, mapDispatchToProps) (Friends)

export default FriendsContainer;
