import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import busReducer from "./bus/reducer";
import loginReducer from "./login/reducer";

const reducers = combineReducers({ authReducer, busReducer,loginReducer });
export default reducers;
