import {
    GET_OTP,
    GET_OTP_SUCCESS,
    LOGOUT,
    SET_USER,
    LOGIN_EMAIL,
    LOGIN_EMAIL_SUCCESS,
    // LOGIN_EMAIL_ERROR,
    GET_OTP_ERROR,
    GET_VERIFY_OTP_ERROR,
    VERIFY_OTP
} from "../actions";

const INIT_STATE = {
    apiData: [],
    loading:false,
    user_data: JSON.parse(localStorage.getItem('user_data')),
    email_data : [],
    send_otp_error: {},
    verify_otp_error: {},
};

const loginReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_OTP:
            return { ...state,loading:true}

        case VERIFY_OTP:
            return { ...state,verify_otp_error: {}}

        case GET_OTP_SUCCESS:
            return { ...state, apiData: action.payload ,loading:false }

        case GET_OTP_ERROR:
            console.log('error', action.payload)
            return { ...state, error: action.payload, loading:false, send_otp_error: action.payload }

        case GET_VERIFY_OTP_ERROR:
            return { ...state, error: action.payload, loading:false, verify_otp_error: action.payload }

        case SET_USER: {
            return { ...state, user_data: action.payload,loading:false  }
        }
        case LOGOUT: {
            return {
                ...state,
                user_data: null,
                loading:false 
            }
        }
        case LOGIN_EMAIL: {
            return { ...state,loading:true  }
        }
        case LOGIN_EMAIL_SUCCESS: {
            return { ...state, email_data: action.payload,loading:false  }
        }

        default:
            return {
                ...state,
            };
    }
};
export default loginReducer;