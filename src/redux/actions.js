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
export const LOGIN_EMAIL = "LOGIN_EMAIL"
export const LOGIN_EMAIL_SUCCESS = "LOGIN_EMAIL_SUCCESS"
export const LOGIN_EMAIL_ERROR = "LOGIN_EMAIL_ERROR"


//dmpass
export const SET_DM_DATA = "SET_DM_DATA";
export const CREATE_DM_PASS = "CREATE_DM_PASS";
export const CREATE_DM_PASS_TWO = "CREATE_DM_PASS_TWO";
export const SET_DM_PASS_ID = "SET_DM_PASS_ID";
export const DM_PASS_DETAILS = "DM_PASS_DETAILS";

//entrypass
export const SET_ENTRY_PASS_ID ="SET_ENTRY_PASS_ID";


//explore
export const GET_REVIEW = "GET_REVIEW";
export const GET_REVIEW_ERROR = "GET_REVIEW_ERROR";
export const GET_REVIEW_SUCCESS = "GET_REVIEW_SUCCESS";

export const EXPORTED_ID = "EXPORTED_ID"

export const GET_ENQUIRE = "GET_ENQUIRE";
export const GET_ENQUIRE_ERROR = "GET_ENQUIRE_ERROR";
export const GET_ENQUIRE_SUCCESS = "GET_ENQUIRE_SUCCESS";

export const SET_QUIZ_QUESTIONS = "SET_QUIZ_QUESTIONS";
export const SET_QUIZ_RESULT = "SET_QUIZ_RESULT";
export const SET_QUIZ_STARTED = "SET_QUIZ_STARTED";
export const SET_QUIZ_ENDED = "SET_QUIZ_ENDED";


export const GET_BOOK_HOTEL='GET_BOOK_HOTEL';
export const GET_BOOK_HOTEL_SUCCESS='GET_BOOK_HOTEL_SUCCESS';
export const GET_BOOK_HOTEL_ERROR='GET_BOOK_HOTEL_ERROR';

export const SET_BOOK_HOTEL='SET_BOOK_HOTEL';
export const SET_API_DATA='SET_API_DATA';
export const SET_BOOK_HOTEL_SUCCESS='SET_BOOK_HOTEL_SUCCESS';
export const SET_BOOK_HOTEL_ERROR='SET_BOOK_HOTEL_ERROR';
// Hotel Details

export const SET_INTEREST_PREHOME = 'SET_INTEREST_PREHOME';
export const SET_INTEREST_PREHOME_SUCCESS = 'SET_INTEREST_PREHOME_SUCCESS';
export const SET_DESTINATION_PREHOME_SUCCESS ='SET_DESTINATION_PREHOME_SUCCESS'
export const HOTEL_PAY ='HOTEL_PAY'
export const HOTEL_PAY_SUCCESS ='HOTEL_PAY_SUCCESS'
export const HOTEL_PAY_ERROR ='HOTEL_PAY_ERROR'

// packages payment

export const PACKAGES_BOOKING = 'PACKAGES_BOOKING';
export const PACKAGES_BOOKING_SUCCESS = 'PACKAGE_BOOKING_SUCCESS';
export const PACKAGES_BOOKING_ERROR = 'PACKAGE_BOOKING_ERROR'

// sign-up
export const SIGNUP_OTP = "SIGNUP_OTP";
export const SIGNUP_OTP_SUCCESS = "SIGNUP_OTP_SUCCESS";
export const SIGNUP_OTP_ERROR = "SIGNUP_OTP_ERROR";
export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const SIGN_UP_VERIFY = "SIGN_UP_VERIFY";
export const SIGN_UP_VERIFY_SUCCESS = "SIGN_UP_VERIFY_SUCCESS";
export const SIGN_UP_VERIFY_ERROR = "SIGN_UP_VERIFY_ERROR";


export * from "./common/actions";
export * from "./auth/actions";
export * from "./bus/actions";
export * from "./hotel/actions";
export * from "./login/actions";
export * from "./dmpass/actions";
export * from "./explore/actions";
export * from "./quiz/actions";
export * from "./signup/actions";

