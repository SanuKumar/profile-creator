import { combineReducers } from "redux";
import userReducers from "../reducers";

const rootReducer = combineReducers({
  users: userReducers
});

export { rootReducer };
