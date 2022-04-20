import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
  if (props.users.lenght === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
        followed: false,
        fullName: "Dmitriy",
        status: "I am cool",
        location: { city: "Kyiv", country: "Ukraine" },
      },
      {
        id: 2,
        photoUrl:
          "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
        followed: true,
        fullName: "Anastasiia",
        status: "SMM-maneger",
        location: { city: "Lviv", country: "Ukraine" },
      },
      {
        id: 3,
        photoUrl:
          "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
        followed: false,
        fullName: "Vovodimer",
        status: "own shop",
        location: { city: "Warsaw", country: "Poland" },
      },
      {
        id: 4,
        photoUrl:
          "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
        followed: true,
        fullName: "Ivan",
        status: "super",
        location: { city: "Roma", country: "Italian" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <img src={u.photoUrl} alt="" className={style.photoUser} />
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
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
};

export default Users;
