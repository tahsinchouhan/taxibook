import {
    SET_MOBILE,
    SET_HOTEL_DATE_DATA,
    SET_HOTEL_LIST_DATA
} from "../actions";

const INIT_STATE = {
   
    hotelDateData: {},
    hotelList: {},
    mobile:'',
};

const hotelReducer = (state = INIT_STATE, action) => {
    console.log({action})
    switch (action.type) {
        
        case SET_HOTEL_DATE_DATA:
            return { ...state, hotelList: action.payload }
        case SET_HOTEL_LIST_DATA:
                return { ...state, hotelDateData: action.payload }
        case SET_MOBILE:
            return { ...state, mobile: action.payload }
        default:
            return {
                ...state,
            };
    }
};
export default hotelReducer;