import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_OTP } from "../actions";
import { API_PATH } from "../../Path/Path";
import {
  getOtpSuccess
} from "./actions";

const OtpAsync = (mobile) =>
  fetch(API_PATH + "/api/v1/customer/otp", {
    method: "POST",
    body: JSON.stringify({
      mobile
    }),
  })
    .then((response) => response.json())
    .then((json) => json);

function* Otp({ payload }) {
  try {
    const apiOtp = yield call(OtpAsync, payload);
    yield put(getOtpSuccess(apiOtp.data));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetPlaceholder() {
  yield takeEvery(GET_OTP, Otp);
}

export default function* rootSaga() {
  yield all([fork(watchGetPlaceholder)]);
}