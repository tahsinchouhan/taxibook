import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_OTP, VERIFY_OTP } from "../actions";
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

const fetchVerifyOtpAsync = (payload) =>
  axios.post(API_PATH + "/api/v1/customer/verifyotp", {
    mobile:payload.mobile,
    registrationMobileOTP:payload.otp
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
function* fetchVerifyOtp({ payload }) {
  try {
    const apiOtp = yield call(fetchVerifyOtpAsync, payload);
    yield put(getOtpSuccess(apiOtp.data));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetPlaceholder() {
  yield takeEvery(GET_OTP, Otp);
}

function* verifyOtp() {
  yield takeEvery(VERIFY_OTP, fetchVerifyOtp);
}

export default function* rootSaga() {
  yield all([fork(watchGetPlaceholder)]);
  yield all([fork(verifyOtp)]);
}