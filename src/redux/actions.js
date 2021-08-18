// COMMON
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const SHOW_MESSAGE = "SHOW_MESSAGE";
export const HIDE_MESSAGE = "HIDE_MESSAGE";

export const GET_DESTINATIONS = "GET_DESTINATIONS";
export const GET_DESTINATIONS_SUCCESS = "GET_DESTINATIONS_SUCCESS";
export const GET_DESTINATIONS_ERROR = "GET_DESTINATIONS_ERROR";

export const SET_ROUTE = "SET_ROUTE";
export const GET_ROUTE = "GET_ROUTE";
export const GET_ROUTE_SUCCESS = "GET_ROUTE_SUCCESS";
export const GET_ROUTE_ERROR = "GET_ROUTE_ERROR";

export const GET_TRIP_BY_ROUTE_ID = "GET_TRIP_BY_ROUTE_ID";
export const GET_TRIP_BY_ROUTE_ID_SUCCESS = "GET_TRIP_BY_ROUTE_ID_SUCCESS";
export const GET_TRIP_BY_ROUTE_ID_ERROR = "GET_TRIP_BY_ROUTE_ID_ERROR";
export const SET_DATA = "SET_DATA";
export const SET_TRIP = "SET_TRIP";
export const CREATE_BUS_BOOKING='CREATE_BUS_BOOKING';
export const GET_BUS_BOOKING='GET_BUS_BOOKING';
export const GET_BUS_BOOKING_SUCCESS='GET_BUS_BOOKING_SUCCESS';
export const DELETE_BUS_BOOKING='DELETE_BUS_BOOKING';
export const GET_BUS_BOOKING_BY_ID='GET_BUS_BOOKING_BY_ID';
export const GET_BUS_BOOKING_BY_ID_SUCCESS='GET_BUS_BOOKING_BY_ID_SUCCESS';
export const UPDATE_BUS_BOOKING='UPDATE_BUS_BOOKING';
export const RESET_BUS_BOOKING='RESET_BUS_BOOKING';
export const SET_BOOKING_ID='SET_BOOKING_ID';
export const SET_MOBILE='SET_MOBILE';
export const SET_ROUTE_DATA='SET_ROUTE_DATA';

export const GET_OTP = "GET_OTP";
export const GET_OTP_SUCCESS = "GET_OTP_SUCCESS";
export const GET_OTP_ERROR = "GET_OTP_ERROR";
export const VERIFY_OTP = "VERIFY_OTP";
export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";

//dmpass
export const SET_DM_DATA = "SET_DM_DATA";
export const CREATE_DM_PASS = "CREATE_DM_PASS";
export const SET_DM_PASS_ID = "SET_DM_PASS_ID";

export * from "./common/actions";
export * from "./auth/actions";
export * from "./bus/actions";
export * from "./login/actions";
export * from "./dmpass/actions";
