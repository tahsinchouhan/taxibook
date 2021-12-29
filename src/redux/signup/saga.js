import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { SIGN_UP ,SIGN_UP_VERIFY_SUCCESS} from "../actions";
import { API_PATH } from "../../Path/Path";
// import { signup } from "./actions";
// import {getOtpSuccess} from "../login/actions";
import {signupSuccess,signupError,verifysignupSuccess} from "./actions";
import axios from "axios";
// import { fetchError } from "../common/actions";


const phone  = localStorage.getItem("mobileNo")
 const Signup = (payload) =>
    axios
      .post(API_PATH + "/api/v1/customer/signup", {
        name : payload.fullName,
        email : payload.email,
        mobile: payload.mobile,
        password : payload.password,
      })
      .then((response) => {
        console.log("response",response)
        return response})
      // .then((json) => json)
      .catch((error) => {
        console.log("error",error)
      });    

    const fetchVerifySignupOtpAsync = async (payload) =>
    await axios
      .post(API_PATH + "/api/v1/customer/verifyotp", {
        mobile: phone,
        registrationMobileOTP: payload.otp,
      })
      .then((response) => {
        return response;
      })
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return error;
      });

function* SignUp( {payload}) {
  console.log("payload",payload)
  try {
    const SignupData = yield call(Signup, payload);
    console.log(SignupData);
    if(SignupData.data.code !== 403){
      yield put(signupSuccess(SignupData.data));
    }else{
      yield put(signupError(SignupData.data));
    }
  } catch (error) {
    console.log("error",error)
    return signupError(error)
  }
}

function* fetchVerifySignupOtp({ payload }) {
  console.log("api call here")
  console.log("payloadpayloadpayload",payload)
try {
  const signup_data_data = yield call(fetchVerifySignupOtpAsync, payload);
  console.log("payloadpayload",signup_data_data)
  if (signup_data_data?.status === 200) {
    yield put(verifysignupSuccess(signup_data_data.data.data));
  }
} catch (error) {
  console.log(error)
}
}

function* watchGetPlaceholder() {
  yield takeEvery(SIGN_UP, SignUp);
}

function* verifySignup() {
  yield takeEvery(SIGN_UP_VERIFY_SUCCESS, fetchVerifySignupOtp);
}

export default function* rootSaga() {
  yield all([fork(watchGetPlaceholder)]);
  yield all([fork(verifySignup)]);
}
