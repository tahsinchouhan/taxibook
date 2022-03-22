import {
    GET_OTP,
    GET_OTP_SUCCESS,
    GET_OTP_ERROR,
    VERIFY_OTP,
    SET_USER,
    LOGOUT,
    LOGIN_EMAIL,
    LOGIN_EMAIL_SUCCESS,
    LOGIN_EMAIL_ERROR,
    GET_VERIFY_OTP_ERROR
} from "../actions";

export const getOtp = (value) => {
    console.log("error",value)
    return {
    type: GET_OTP,
    payload: value,
}};

export const verifyOtp = (mobile,otp) => ({
    type: VERIFY_OTP,
    payload: {mobile,otp},
});

export const getOtpSuccess = (value) => ({
    type: GET_OTP_SUCCESS,
    payload: value,
});

export const getOtpError = (value) => ({
    type: GET_OTP_ERROR,
    payload: value,
});

export const getVerifyOtpError = (value) => ({
    type: GET_VERIFY_OTP_ERROR,
    payload: value,
});

export const setUser = (value) => ({
    type: SET_USER,
    payload: value,
});

export const logout = (value) => ({
    type: LOGOUT,
    payload: value,
});

export const loginEmail = (value) => {
    console.log("valueEmail1", value)
    return {
    type: LOGIN_EMAIL,
    payload: value,
}};

export const loginEmailSuccess = (value) =>{
    console.log("valueEmail2",value)

    return {
    type: LOGIN_EMAIL_SUCCESS,
    payload: value,
}};

export const loginEmailError = (value) => ({
    type: LOGIN_EMAIL_ERROR,
    payload: value,
});