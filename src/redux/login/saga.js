import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_OTP } from "../actions";
import { API_PATH } from "../../Path/Path";
import {
  getOtpSuccess
} from "./actions";
import axios from 'axios'

const OtpAsync = (mobile) =>
axios.post(API_PATH + "/api/v1/customer/otp", {
      mobile
  })
    .then((response) => response)
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