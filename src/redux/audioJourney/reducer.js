import {
    SET_AUDIO_JOURNEY_FILES,
  } from "../actions";
  
  const INIT_STATE = {
    audioJourneyFiles: []
  };
  
  const audioJourneyReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case SET_AUDIO_JOURNEY_FILES:
        return {...state, audioJourneyFiles: action.payload}
  
      default:
        return {
          ...state,
        };
    }
  };
  export default audioJourneyReducer;
  