import {
    SET_BOOKING_ID,
    SET_MOBILE,
    SET_HOTEL_DATE_DATA,
    SET_HOTEL_LIST_DATA
} from "../actions";

export const setBookingId = (value) => ({
    type: SET_BOOKING_ID,
    payload: value,
});
export const setMobile = (value) => ({
    type: SET_MOBILE,
    payload: value,
});

export const setHotelDateData = (value) => ({
    type: SET_HOTEL_DATE_DATA,
    payload: value,
});

export const setHtotelListData = (value) => ({
    type: SET_HOTEL_LIST_DATA,
    payload: value,
});


  