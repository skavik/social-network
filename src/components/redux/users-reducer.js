const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      fullName: "Dmitriy",
      status: "I am cool",
      location: { city: "Kyiv", country: "Ukraine" },
    },
    {
      id: 2,
      followed: true,
      fullName: "Anastasiia",
      status: "SMM-maneger",
      location: { city: "Lviv", country: "Ukraine" },
    },
    {
      id: 3,
      followed: false,
      fullName: "Vovodimer",
      status: "own shop",
      location: { city: "Warsaw", country: "Poland" },
    },
    {
      id: 4,
      followed: true,
      fullName: "Ivan",
      status: "super",
      location: { city: "Roma", country: "Italian" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
