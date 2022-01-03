import {
    PACKAGES_BOOKING,
    PACKAGES_BOOKING_SUCCESS,
    PACKAGES_BOOKING_ERROR
  } from "../actions";
  
  const INIT_STATE = {
    packageLoader: false,
    initURL: "",
    error: "",
    getPackages: [],
  };
  
  const packageReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case PACKAGES_BOOKING:
        return {
          ...state,
          getPackages: action.payload,
          packageLoader: true
        };
  
      case PACKAGES_BOOKING_SUCCESS:
        return {
          ...state,
          metricsloader: false,
          packageLoader: action.payload,
          error: "",
        };
      case PACKAGES_BOOKING_ERROR:
        return {
          ...state,
          packageLoader: false,
          error: action.payload.message,
        };
      default:
        return { ...state };
    }
  };
  
  export default packageReducer;
  
  