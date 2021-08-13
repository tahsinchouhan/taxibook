import {
    SET_ROUTE,
    SET_DATA,
    SET_TRIP,
    GET_ROUTE,
    GET_ROUTE_SUCCESS,
    GET_TRIP_BY_ROUTE_ID,
    GET_TRIP_BY_ROUTE_ID_SUCCESS,
    SET_BOOKING_ID,
    SET_MOBILE
} from "../actions";

const INIT_STATE = {
    data:[],
    route_id: '',
    tripList: [],
    tripData: '',
    basic_details: [],
    booking_id:'',
    mobile:'',
};

const busReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_ROUTE:
            return { ...state, route_id: action.payload }
        case SET_TRIP:
            return { ...state, tripData: action.payload }
        case SET_DATA:
            return { ...state, data: action.payload }

        case SET_BOOKING_ID:
            return { ...state, booking_id: action.payload }
            
        case SET_MOBILE:
            return { ...state, mobile: action.payload }

        case GET_ROUTE:
            return { ...state, route_id: action.payload }

        case GET_ROUTE_SUCCESS:
            return { ...state, route_id: action.payload, }

        case GET_TRIP_BY_ROUTE_ID_SUCCESS:
            console.log("suc", action.payload);
            return { ...state, tripList: action.payload, }
        default:
            return {
                ...state,
            };
    }
};
export default busReducer;