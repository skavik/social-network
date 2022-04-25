import * as axios from "axios";
import React from "react";
import style from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && style.selectedPage}
                onClick={() => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>

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
