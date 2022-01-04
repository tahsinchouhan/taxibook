import {
    SIGNUP_OTP,
    SIGNUP_OTP_SUCCESS,
    SIGNUP_OTP_ERROR,
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    SIGN_UP_VERIFY,
    SIGN_UP_VERIFY_SUCCESS,
    SIGN_UP_VERIFY_ERROR,
} from "../actions"

export const verifysignup = (value) =>{
    console.log("valuevalue",value)
    return {
    type:SIGN_UP_VERIFY,
    payload: value,
}}

export const verifysignupSuccess = (value) =>{
    console.log("value",value)
    return {
    type:SIGN_UP_VERIFY_SUCCESS,
    payload: value,
}}

export const verifysignupError = (message) =>{
    console.log("message",message)
    return {
    type:SIGN_UP_VERIFY_ERROR,
    payload: message,
}}
export const signupOtp = (value) =>{
    console.log("value",value)
    return {
    type:SIGNUP_OTP,
    payload: value,
}}

export const signupOtpSuccess = (value) =>({
    type:SIGNUP_OTP_SUCCESS,
    payload: value,
})

export const signupOtpError = (value) =>({
    type:SIGNUP_OTP_ERROR,
    payload: value,
})

export const signup = (value) =>{
    console.log("values",value)
    return {
    type: SIGN_UP,
    payload: value,
}}

export const signupSuccess = (value) =>{
    console.log("response",value)
    return {
    type:SIGN_UP_SUCCESS,
    payload:value
}}

export const signupError = (value) =>({
    type: SIGN_UP_ERROR,
    payload:value,
})
