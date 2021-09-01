import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { CREATE_BUS_BOOKING, GET_TRIP_BY_ROUTE_ID } from "../actions";
import { API_PATH } from "../../Path/Path";
import axios from 'axios'
import {
    getRoutesError,
    getTripByRouteIdSuccess,
    setBookingId
} from "./actions";

const TripByRouteIdAsync = async (payload) =>
    await fetch(`${API_PATH}/api/v1/trips/list?route=${payload}`)
        .then((response) => response.json() )
        // console.log("tripssssss", response);
       
        .then((json) => json);


const createBusBookingRequest = async (payload) =>
    await axios.post(`${API_PATH}/api/v1/busticket/create`, {
        name: payload.name,
        email: payload.email,
        whatsapp: payload.whatsapp,
        // mobile: `91${payload.mobile}` ,
        mobile: payload.mobile ,
        trips_id: payload.trips_id,
        nameoftrip: payload.nameoftrip,
        date: payload.date,
        time: payload.time,
        route: payload.route,
        vehical_id: payload.bus,
        from: payload.from,
        to: payload.to,
        basic_details: payload.basic_details,
        enternumberoftraveller: payload.basic_details.length,
        ticketprice: payload.price,
        surcharge: payload.surcharge,
        // where:"Create from Website",
        createdby: JSON.parse(localStorage.getItem('user_data'))?.user?._id
    })
        .then(busticket => busticket.data)
        .catch(error => error);

function* TripByRouteId({ payload }) {
    try {
        const apiTripByRouteId = yield call(TripByRouteIdAsync, payload);
        console.log("redsnji", apiTripByRouteId);
        yield put(getTripByRouteIdSuccess(apiTripByRouteId.data));
    } catch (error) {
        console.log(error);
    }
}

function* createBusBooking({ payload }) {
    console.log("pay",payload); 
    const phone = JSON.parse(localStorage.getItem("mobile"))  
    try {
        const busticket = yield call(createBusBookingRequest, {...payload, mobile:phone, email: busticket.data.email});       
        yield put(setBookingId(busticket.data.booking_Id));
        console.log("bus",busticket);
    } catch (error) {
        yield put(getRoutesError(error));
    }
}


function* watchGetPlaceholder() {
    yield takeEvery(GET_TRIP_BY_ROUTE_ID, TripByRouteId);
}

export function* addBusBooking() {
    yield takeEvery(CREATE_BUS_BOOKING, createBusBooking);
}

export default function* rootSaga() {
    yield all([fork(watchGetPlaceholder)])
    yield all([fork(addBusBooking)])
}