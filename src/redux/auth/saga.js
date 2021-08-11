import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GETDESTINATIONS } from "../actions";
import { API_PATH } from "../../Path/Path";

const DestinationsAsync = (payload) =>
fetch(API_PATH + "/api/v1/destinations/list")
.then((response) => response.json())
.then((json) => json);

function* Destinations({ payload }) {
  try {
    const apiDestinations = yield call(DestinationsAsync, payload);
    console.log("LOGIN:::::::", apiDestinations);
    // if (apiLogin.success === true) {
    //   yield put(getLoginSuccess(apiLogin));
    // } else {
    //   yield put(getLoginError(apiLogin));
    // }
  } catch (error) {
    console.log(error);
  }
}

function* watchGetPlaceholder() {
  yield takeEvery(GETDESTINATIONS, Destinations);
}
export default function* rootSaga() {
  yield all([fork(watchGetPlaceholder)]);
}
