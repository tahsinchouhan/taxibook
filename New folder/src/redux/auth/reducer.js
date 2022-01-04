import {
  GET_DESTINATIONS,
  GET_DESTINATIONS_SUCCESS
} from "../actions";

const INIT_STATE = {
  apiData: [],
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_DESTINATIONS:
      return {...state, apiData: action.payload}

    case GET_DESTINATIONS_SUCCESS: 
      return {...state, apiData: action.payload}
    default:
      return {
        ...state,
      };
  }
};
export default authReducer;
