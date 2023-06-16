import { combineReducers } from "redux";
import { UserReducer } from "./user";
import { PostReducer } from "./post";

export default combineReducers({
  user: UserReducer,
  post: PostReducer,
});
