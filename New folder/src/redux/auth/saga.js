import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_DESTINATIONS } from "../actions";
import { API_PATH } from "../../Path/Path";
import {
  getDestinationsSuccess
} from "./actions";

const DestinationsAsync = (payload) =>
fetch(API_PATH + "/api/v1/destinations/list")
.then((response) => response.json())
.then((json) => json);

function* Destinations({ payload }) {
  try {
    const apiDestinations = yield call(DestinationsAsync, payload);
      yield put(getDestinationsSuccess(apiDestinations.data));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetPlaceholder() {
  yield takeEvery(GET_DESTINATIONS, Destinations);
}
export default function* rootSaga() {
  yield all([fork(watchGetPlaceholder)]);
}
