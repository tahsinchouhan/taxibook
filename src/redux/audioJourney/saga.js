import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {  GET_AUDIO_JOURNEY_FILES, GET_AUDIO_JOURNEY_FILE } from "../actions";
import { API_PATH } from "../../Path/Path";
import {
    setAudioJourneyFiles,
    setAudioJourneyFile
} from "./actions";

const AudioJourneysAsync = (payload) =>
fetch(API_PATH + "/api/v1/files/list")
.then((response) => response.json())
.then((json) => json);

const AudioJourneyAsync = (id) =>
fetch(API_PATH + "/api/v1/files/" + id)
.then((response) => response.json())
.then((json) => json);

function* setAudioJourneys({ payload }) {
  try {
    const audioJourneyFiles = yield call(AudioJourneysAsync, payload);
      yield put(setAudioJourneyFiles(audioJourneyFiles.data));
  } catch (error) {
    console.log(error);
  }
}

function* setAudioJourney({ id }) {
  try {
    const audioJourneyFile = yield call(AudioJourneyAsync, id);
      yield put(setAudioJourneyFile(audioJourneyFile.data));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetAudioJourneys() {
  yield takeEvery(GET_AUDIO_JOURNEY_FILES, setAudioJourneys);
  yield takeEvery(GET_AUDIO_JOURNEY_FILE, setAudioJourney);
}
export default function* rootSaga() {
  yield all([fork(watchGetAudioJourneys)]);
}
