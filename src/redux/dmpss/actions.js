import {
    SET_ROUTE,
    GET_ROUTE,
    SET_DATA,
    GET_ROUTE_SUCCESS,
    GET_ROUTE_ERROR,
    GET_TRIP_BY_ROUTE_ID,
    GET_TRIP_BY_ROUTE_ID_SUCCESS,
    GET_TRIP_BY_ROUTE_ID_ERROR,
    SET_TRIP,
    SET_BOOKING_ID,
    CREATE_BUS_BOOKING,
    SET_MOBILE,
    SET_START_DATE,
    SET_ROUTE_DATA,
} from "../actions";

export const setRouteId = (value) => ({
    type: SET_ROUTE,
    payload: value,
});

export const getRoutes = (value) => ({
    type: GET_ROUTE,
    payload: value,
});

export const getRoutesSuccess = (value) => ({
    type: GET_ROUTE_SUCCESS,
    payload: value,
});

export const getRoutesError = (value) => ({
    type: GET_ROUTE_ERROR,
    payload: value,
});

export const getTripByRouteId = (value) => ({
    type: GET_TRIP_BY_ROUTE_ID,
    payload: value,
});

export const getTripByRouteIdSuccess = (value) => ({
    type: GET_TRIP_BY_ROUTE_ID_SUCCESS,
    payload: value,
});


export const setTripData = (value) => ({
    type: SET_TRIP,
    payload: value,
});

export const setApiData = (value) => ({
    type: SET_DATA,
    payload: value,
});

export const setBookingId = (value) => ({
    type: SET_BOOKING_ID,
    payload: value,
});
export const setMobile = (value) => ({
    type: SET_MOBILE,
    payload: value,
});

export const setBookinStartDate = (value) => ({
    type: SET_START_DATE,
    payload: value,
});

export const setRouteData = (value) => ({
    type: SET_ROUTE_DATA,
    payload: value,
});

export const createBusBooking = (values) => {
    return {
      type: CREATE_BUS_BOOKING,
      payload: values
    };
};
  