import {
    SET_AUDIO_JOURNEY_FILES,
  } from "../actions";
  
  const INIT_STATE = {
    audioJourneyFiles: [],
    audioJourneyFile: {}
  };
  
  const audioJourneyReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case SET_AUDIO_JOURNEY_FILES:
        return {...state, audioJourneyFiles: action.payload}
      case SET_AUDIO_JOURNEY_FILE:
        return {...state, audioJourneyFile: action.payload}  
  
      default:
        return {
          ...state,
        };
    }
  };
  export default audioJourneyReducer;
  