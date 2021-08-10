import {
  GETDESTINATIONS
} from "../actions";

const INIT_STATE = {
  apiData: [],
};

const authReducer = (state = INIT_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case GETDESTINATIONS: 
      return {...state, apiData: action.payload}
    default:
      return {
        ...state,
      };
  }
};
export default authReducer;
