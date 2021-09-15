import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_REVIEW, showMessage, GET_ENQUIRE } from "../actions";
import { API_PATH } from "../../Path/Path";
import axios from 'axios'

const getReviewAsync = async (payload) =>
    await axios.post(`${API_PATH}/api/v1/review/create`,payload)
        .then(busticket => busticket.data)
        .catch(error => error);


function* getReview({ payload }) {
  try {
    const apiReview = yield call(getReviewAsync, payload);
      yield put (showMessage(apiReview.message));
  } catch (error) {
    console.log(error);
  }
}

const getEnquireAsync = async (payload) =>
    await axios.post(`${API_PATH}/api/v1/enquiry/create`,payload)
        .then(busticket => busticket.data)
        .catch(error => error);

function* getEnquire({ payload }) {
  console.log("DATADATDTA::::",payload)
  try {
    const apiEnquire = yield call(getEnquireAsync, payload);
      yield put (showMessage(apiEnquire.message));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetPlaceholder() {
  yield takeEvery(GET_REVIEW, getReview);
}

function* watchaddEquire() {
  yield takeEvery(GET_ENQUIRE, getEnquire);
}
export default function* rootSaga() {
  yield all([fork(watchGetPlaceholder)]);
  yield all([fork(watchaddEquire)]);
}
