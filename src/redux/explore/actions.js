import {
  GET_REVIEW,
  GET_REVIEW_ERROR,
  GET_REVIEW_SUCCESS,
  GET_ENQUIRE,
  GET_ENQUIRE_ERROR,
  GET_ENQUIRE_SUCCESS,
} from "../actions";

export const getReview = (value) => ({
  type: GET_REVIEW,
  payload: value,
});

export const getReviewError = (value) => ({
  type: GET_REVIEW_ERROR,
  payload: value,
});

export const getReviewSuccess = (value) => ({
  type: GET_REVIEW_SUCCESS,
  payload: value,
});


export const getEnquire = (value) => ({
  type: GET_ENQUIRE,
  payload: value,
});

export const getEnquireError = (value) => ({
  type: GET_ENQUIRE_ERROR,
  payload: value,
});

export const getEnquireSuccess = (value) => ({
  type: GET_ENQUIRE_SUCCESS,
  payload: value,
});
