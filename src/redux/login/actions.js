import {
    GET_OTP,
    GET_OTP_SUCCESS,
    GET_OTP_ERROR,
    VERIFY_OTP,
    SET_USER,
    LOGOUT,
} from "../actions";

export const getOtp = (value) => ({
    type: GET_OTP,
    payload: value,
});

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

export const setUser = (value) => ({
    type: SET_USER,
    payload: value,
});

export const logout = (value) => ({
    type: LOGOUT,
    payload: value,
});