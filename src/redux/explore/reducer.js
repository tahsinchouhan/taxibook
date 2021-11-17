import {
  GET_REVIEW,
  GET_REVIEW_ERROR,
  GET_REVIEW_SUCCESS,
  GET_ENQUIRE,
  GET_ENQUIRE_ERROR,
  GET_ENQUIRE_SUCCESS,
  EXPORTED_ID
} from "../actions";

const INIT_STATE = {
  apiData: [],
  apiEnquireData: [],
  exportid : ''
};

const exploreReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_REVIEW:
      return { ...state };

    case GET_REVIEW_ERROR:
      return { ...state, apiData: action.payload };

    case GET_REVIEW_SUCCESS:
      return { ...state, apiData: action.payload };

    case GET_ENQUIRE:
      return { ...state };

    case GET_ENQUIRE_SUCCESS:
      return { ...state, apiEnquireData: action.payload };

    case GET_ENQUIRE_ERROR:
      return { ...state, apiEnquireData: action.payload };

      case EXPORTED_ID:
        return { ...state, exportid: action.payload};    

    default:
      return {
        ...state,
      };
  }
};
export default exploreReducer;
