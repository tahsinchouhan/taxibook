import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_OTP, VERIFY_OTP } from "../actions";
import { API_PATH } from "../../Path/Path";
import {
  getOtpSuccess, setUser
} from "./actions";
import axios from 'axios'
import { fetchError, hideMessage } from "../common/actions";

const OtpAsync = (mobile) =>
  axios.post(API_PATH + "/api/v1/customer/otp", {
    mobile
  })
    .then((response) => response)
    .then((json) => json)
    .catch(error => error);

const fetchVerifyOtpAsync = async (payload) =>
  await axios.post(API_PATH + "/api/v1/customer/verifyotp", {
    mobile: payload.mobile,
    registrationMobileOTP: payload.otp
  })
    .then((response) => {
      return response
    })
    .then((json) => {
      return json
    })
    .catch(error => {
      return error
    });

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
    const user_data = yield call(fetchVerifyOtpAsync, payload);
    if (user_data?.status == 200) {
      yield put(setUser(user_data.data.data));
      localStorage.setItem('user_data', JSON.stringify(user_data.data.data));
      yield put(hideMessage())
    } else {
      yield put(fetchError(user_data.message))
    }
  } catch (error) {
    yield put(fetchError(error.message))
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