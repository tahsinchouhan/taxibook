import {
    GET_OTP,
    GET_OTP_SUCCESS
} from "../actions";

const INIT_STATE = {
    apiData: [],
};

const loginReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_OTP:
            return { ...state, apiData: action.payload }

        case GET_OTP_SUCCESS:
            return { ...state, apiData: action.payload }
        default:
            return {
                ...state,
            };
    }
};
export default loginReducer;