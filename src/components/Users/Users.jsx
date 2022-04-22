import * as axios from "axios";
import React from "react";
import style from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <div>
              <img src={u.photoUrl} alt="" className={style.photoUser} />
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
            <div>
              <div>
                <p>{u.fullName}</p>
                <p>{u.status}</p>
              </div>
              <div>
                <p>{u.location.country}</p>
                <p>{u.location.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
