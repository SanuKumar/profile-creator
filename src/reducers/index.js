import { combineReducers } from "redux";
import userReducers from "./userReducers";
import postReducers from "./postReducers";
import commentsReducers from "./commentsReducers";
import activityReducers from "./activityReducers";

export default combineReducers({
  users: userReducers,
  posts: postReducers,
  activity: activityReducers,
  comments: commentsReducers
});
