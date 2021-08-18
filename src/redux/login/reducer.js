import {
    GET_OTP,
    GET_OTP_SUCCESS,
    LOGOUT,
    SET_USER,
} from "../actions";

const INIT_STATE = {
    apiData: [],
    user_data: JSON.parse(localStorage.getItem('user_data'))
};

const loginReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_OTP:
            return { ...state, apiData: action.payload }

        case GET_OTP_SUCCESS:
            return { ...state, apiData: action.payload }

        case SET_USER: {
            return { ...state, user_data: action.payload }
        }
        case LOGOUT: {
            return {
                ...state,
                user_data: null,
            }
        }

        default:
            return {
                ...state,
            };
    }
};
export default loginReducer;