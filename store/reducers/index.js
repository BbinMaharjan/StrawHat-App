import { combineReducers } from "redux";
import usersReducer from "./signup";

const reducers = combineReducers({
  usersState: usersReducer,
});

export default reducers;
