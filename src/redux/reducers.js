import { combineReducers } from "redux";
import commonReducer from "./common/reducer";
import authReducer from "./auth/reducer";
import busReducer from "./bus/reducer";
import dmpassReducer from "./dmpass/reducer";
import loginReducer from "./login/reducer";

const reducers = combineReducers({ commonReducer, authReducer, busReducer,loginReducer,dmpassReducer });
export default reducers;
