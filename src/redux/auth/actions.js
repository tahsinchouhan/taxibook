import {
  GET_DESTINATIONS,
  GET_DESTINATIONS_SUCCESS,
  GET_DESTINATIONS_ERROR
} from "../actions";

export const getDestinations = (value) => ({
  type: GET_DESTINATIONS,
  payload: value,
});

export const getDestinationsSuccess = (value) => ({
  type: GET_DESTINATIONS_SUCCESS,
  payload: value,
});

export const getDestinationsError = (value) => ({
  type: GET_DESTINATIONS_ERROR,
  payload: value,
});




