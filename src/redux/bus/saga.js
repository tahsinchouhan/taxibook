import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { CREATE_BUS_BOOKING, GET_TRIP_BY_ROUTE_ID } from "../actions";
import { API_PATH } from "../../Path/Path";
import axios from "axios";
import * as moment from "moment";
import {
  getRoutesError,
  getTripByRouteIdSuccess,
  setBookingId,
} from "./actions";

const TripByRouteIdAsync = async (payload) =>
  await fetch(
    `${API_PATH}/api/v1/trips/list?route=${payload._id}&date=${moment(
      payload.startDate
    ).format("YYYY-MM-DD")}`
  )
    .then((response) => response.json())
    .then((json) => json);

const createBusBookingRequest = async (payload) =>{
  const user = JSON.parse(localStorage.getItem('user_data'));
  const token = user.token
  return  await axios
    .post(`${API_PATH}/api/v1/busticket/create`, {
      name: payload.name,
      email: payload.email,
      whatsapp: payload.whatsapp,
      mobile: payload.mobile,
      trips_id: payload.trips_id,
      nameoftrip: payload.nameoftrip,
      date: moment(payload.date).format("YYYY-MM-DD"),
      time: payload.time,
      route: payload.route,
      vehical_id: payload.bus,
      from: payload.from,
      to: payload.to,
      amount: payload.amount,
      basic_details: payload.basic_details,
      enternumberoftraveller: payload.basic_details.length,
      ticketprice: payload.price,
      surcharge: payload.surcharge,
      createdby: JSON.parse(localStorage.getItem("user_data"))?.user?._id,
      where:"Website",
    },
    {headers: { Authorization: `Bearer ${token}` }}

    )
    .then((busticket) => busticket.data)
    .catch((error) => error);
}
  

function* TripByRouteId({ payload }) {
  console.log("DATADTADT:::::", payload);
  try {
    const apiTripByRouteId = yield call(TripByRouteIdAsync, payload);
    yield put(getTripByRouteIdSuccess(apiTripByRouteId.data));
  } catch (error) {
    console.log(error);
  }
}

function* createBusBooking({ payload }) {
  console.log("pay", payload);
  const phone = localStorage.getItem("mobile");
  try {
    const busticket = yield call(createBusBookingRequest, {
      ...payload,
      mobile: phone,
    });
    yield put(setBookingId(busticket.data.booking_Id));
    console.log("bus", busticket);
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
  yield all([fork(watchGetPlaceholder)]);
  yield all([fork(addBusBooking)]);
}
