import {
  SIGNUP_OTP,
  SIGNUP_OTP_SUCCESS,
  SIGNUP_OTP_ERROR,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_VERIFY,
  SIGN_UP_VERIFY_SUCCESS,
} from "../actions";

const INIT_STATE = {
  SignOtp: "",
  signup_success_data: {},
  loading: false,
  signup_data: "",
  SignVerify: []
  // JSON.parse(localStorage.getItem('user_data'))
};

const signupReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, signup_data: action.payload, loading: false, signup_success_data: {} };
    case SIGN_UP_SUCCESS:
      return { ...state, signup_success_data: action.payload, loading: false };
    case SIGN_UP_ERROR:
      return { ...state, signup_success_data: action.payload, loading: false };
    case SIGNUP_OTP:
      return { ...state, SignOtp: action.payload, loading: true };
    case SIGNUP_OTP_SUCCESS:
      return { ...state, SignOtp: action.payload, loading: false };
      case SIGN_UP_VERIFY:
        return { ...state, SignVerify: action.payload, loading: true};
        case SIGN_UP_VERIFY_SUCCESS:
          return { ...state, SignVerify: action.payload, loading: false };
    default:
      return {
        ...state,
      };
  }
};
export default signupReducer;
