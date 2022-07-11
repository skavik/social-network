import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Users.module.css";
import user from "../../assets/img/user.png";
import * as axios from "axios";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={style.pagination}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && style.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id} className={style.userBox}>
          <div className={style.user__photoBox}>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={u.photos.small || user}
                alt=""
                className={style.photoUser}
              />
            </NavLink>
            {u.followed ? (
              <button disabled={props.followingInProgrese}
                onClick={() => {
                  props.toggleFollowingIsProgrese(true);

                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "72a4f2e7-5e65-43a1-a356-1ce43d7c4d02",
                        },
                      }
                    )
                    .then((response) => {

                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                      props.toggleFollowingIsProgrese(false)
                    });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button disabled={props.followingInProgrese}
                onClick={() => {
                  props.toggleFollowingIsProgrese(true)
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "72a4f2e7-5e65-43a1-a356-1ce43d7c4d02",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.toggleFollowingIsProgrese(false)
                    });
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div className={style.user__infoBox}>
            <div className={style.user__infoBox__name}>
              <p>{u.name}</p>
              <p>{u.status}</p>
            </div>
            <div className={style.user__infoBox__location}>
              <p>{"u.location.country"}</p>
              <p>{"u.location.city"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
