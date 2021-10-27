import { combineReducers } from "redux";
import commonReducer from "./common/reducer";
import authReducer from "./auth/reducer";
import busReducer from "./bus/reducer";
import dmpassReducer from "./dmpass/reducer";
import loginReducer from "./login/reducer";
import exploreReducer from "./explore/reducer";
import quizReducer from "./quiz/reducer";
import hotelReducer from "./hotel/reducer";
const reducers = combineReducers({
  commonReducer,
  authReducer,
  busReducer,
  hotelReducer,
  loginReducer,
  dmpassReducer,
  exploreReducer,
  quizReducer,
});
export default reducers;
