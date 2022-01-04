import {
    SET_AUDIO_JOURNEY_FILES,
    GET_AUDIO_JOURNEY_FILES,
    SET_AUDIO_JOURNEY_FILE,
    GET_AUDIO_JOURNEY_FILE
  } from "../actions";

  export const setAudioJourneyFiles = (audioJourneyFiles) => ({
    type: SET_AUDIO_JOURNEY_FILES,
    payload: audioJourneyFiles,
  });

  export const getAudioJourneyFiles = () => ({
    type: GET_AUDIO_JOURNEY_FILES,
  });

  export const setAudioJourneyFile = (audioJourneyFile) => ({
    type: SET_AUDIO_JOURNEY_FILE,
    payload: audioJourneyFile,
  });

  export const getAudioJourneyFile = (id) => ({
    type: GET_AUDIO_JOURNEY_FILE,
    payload: id
  });