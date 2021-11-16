import {
    PACKAGES_BOOKING,
    PACKAGES_BOOKING_SUCCESS,
    PACKAGES_BOOKING_ERROR
} from "../actions";

export const packagesbookingAction = (value) => ({
    type: PACKAGES_BOOKING,
    payload: value,
});

export const packagesbookingsuccess = (value) => ({
    type: PACKAGES_BOOKING_SUCCESS,
    payload: value,
});

export const packagesbookingerror = (value) => ({
    type: PACKAGES_BOOKING_ERROR,
    payload: value,
});

  