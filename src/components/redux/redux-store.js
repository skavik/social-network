import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import unthReducer from "./unth-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  unth: unthReducer,
});

let store = createStore(reducers);

export default store;
