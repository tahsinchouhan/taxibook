import {
  GET_BOOK_HOTEL,
  GET_BOOK_HOTEL_SUCCESS,
  GET_BOOK_HOTEL_ERROR,
  SET_BOOK_HOTEL,
  SET_BOOK_HOTEL_SUCCESS,
  SET_BOOK_HOTEL_ERROR,
  SET_API_DATA,
  SET_INTEREST_PREHOME,
  SET_INTEREST_PREHOME_SUCCESS,
  SET_DESTINATION_PREHOME_SUCCESS,
} from "../actions";

export const getBookHotel = (values) => {
  return { type: GET_BOOK_HOTEL, payload: values };
};

export const setinterestprehome = (values) => {
  return { type: SET_INTEREST_PREHOME, payload: values };
};

export const setinterestprehomeSuccess = (values) => {
  return { type: SET_INTEREST_PREHOME_SUCCESS, payload: values };
};
export const setDestinationprehomeSuccess = (values) => {
  return { type: SET_DESTINATION_PREHOME_SUCCESS, payload: values };
};

export const getBookHotelSuccess = (values) => {
  return {
    type: GET_BOOK_HOTEL_SUCCESS,
    payload: values,
  };
};
export const getBookHotelError = (values) => ({
  type: GET_BOOK_HOTEL_ERROR,
  payload: values,
});

export const setBookHotel = (values) => {
  console.log(values);
  return { type: SET_BOOK_HOTEL, payload: values };
};

export const setBookHotelSuccess = (values) => {
  return {
    type: SET_BOOK_HOTEL_SUCCESS,
    payload: values,
  };
};
export const setBookHotelError = (values) => ({
  type: SET_BOOK_HOTEL_ERROR,
  payload: values,
});
export const setHApiData = (value) => ({
  type: SET_API_DATA,
  payload: value,
});
