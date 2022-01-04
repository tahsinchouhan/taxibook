import {
    SET_AUDIO_JOURNEY_FILES,
    GET_AUDIO_JOURNEY_FILES
  } from "../actions";

  export const setAudioJourneyFiles = (audioJourneyFiles) => ({
    type: SET_AUDIO_JOURNEY_FILES,
    payload: audioJourneyFiles,
  });

  export const getAudioJourneyFiles = () => ({
    type: GET_AUDIO_JOURNEY_FILES,
  });