import React from "react";
import { connect } from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
    users: state.usersPage.users
}



const UsersContainer = connect (mapStateToProps, ) (Users)


export default 