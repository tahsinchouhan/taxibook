import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {  GET_AUDIO_JOURNEY_FILES } from "../actions";
import { API_PATH } from "../../Path/Path";
import {
    setAudioJourneyFiles
} from "./actions";

const AudioJourneysAsync = (payload) =>
fetch(API_PATH + "/api/v1/files/list")
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

function* watchGetAudioJourneys() {
  yield takeEvery(GET_AUDIO_JOURNEY_FILES, setAudioJourneys);
}
export default function* rootSaga() {
  yield all([fork(watchGetAudioJourneys)]);
}
