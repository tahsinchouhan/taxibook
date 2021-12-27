import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API_PATH } from "../../Path/Path";
import axios from "axios";
import * as moment from "moment";
import {
  GET_BOOK_HOTEL,
  GET_BOOK_HOTEL_SUCCESS,
  SET_BOOK_HOTEL,
  SET_BOOK_HOTEL_SUCCESS,
  SET_INTEREST_PREHOME,
  HOTEL_PAY,
} from "../actions";
import {
  getBookHotel,
  getBookHotelSuccess,
  setBookHotelSuccess,
  setinterestprehomeSuccess,
  setDestinationprehomeSuccess,
  hotelpaySuccess,
} from "./actions";

const getBookHotellistAsync = async (payload) => {
  if (payload?.filter) {
    let check_in = moment(payload.startDate).format("YYYY-MM-DD");
    let address =
      payload.sendlocation === undefined ? "Jagdalpur" : payload.sendlocation;
    let check_out = moment(payload.endDate).format("YYYY-MM-DD");

    const fd = new FormData();
    fd.append("address", address);
    fd.append("check_in", check_in);
    fd.append("check_out", check_out);
    fd.append("guests", payload.noOfGuest);
    fd.append("rooms", payload.noOfRoom);
    const params = {
      method: "POST",
      body: fd,
    };
    return await fetch(`${API_PATH}/api/v2/room/set`, params)
      .then((response) => response.json())
      .then((json) => json);
  } else {
    return await fetch(`${API_PATH}/api/v2/hotelregistration/list`)
      .then((response) => response.json())
      .then((json) => json);
  }
};

function* getBookHotelSaga({ payload }) {
  try {
    const apigetHotelList = yield call(getBookHotellistAsync, payload);
    yield put(getBookHotelSuccess(apigetHotelList.data));
  } catch (error) {
    console.log(error);
  }
}

function* getListofHotel() {
  yield takeEvery(GET_BOOK_HOTEL, getBookHotelSaga);
}

const sethotelbookingAsync = async (payload) => {
  const user = JSON.parse(localStorage.getItem("user_data"));
  const customerId = JSON.parse(localStorage.getItem("customer_id"));

  const token = user.token;
  return axios
    .post(
      `${API_PATH}/api/v2/booking/create`,
      {
        customer_id: customerId,
        hotel_id: payload?.basic_details?.hotel_id?._id,
        room_id: payload?.basic_details?._id,
        check_in: payload?.startDate,
        check_out: payload?.endDate,
        amount: payload?.basic_details?.price?.base_price,
        number_of_guests: payload?.no_of_guest,
        number_of_rooms: payload?.no_of_room,
        amount: payload?.total_amount * 100,
        mobile: payload?.mobile,
        email: payload?.email,
        full_name: payload?.name,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res) => {
      console.log("resres", res);
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const atHotelPayAsync = async (payload) => {
  const user = JSON.parse(localStorage.getItem("user_data"));
  const customerId = JSON.parse(localStorage.getItem("customer_id"));
  const mobileNo = JSON.parse(localStorage.getItem("mobile"));

  const token = user.token;
  return axios
    .post(
      `${API_PATH}/api/v2/booking/create`,
      {
        customer_id: customerId,
        hotel_id: payload.hotelPayDetails.hotel_id._id,
        user_id: payload.hotelPayDetails.user_id._id,
        room_id: payload.hotelPayDetails._id,
        check_in: moment(payload.hotelPayDetails.startDate).format(
          "YYYY-MM-DD"
        ),
        check_out: moment(payload.hotelPayDetails.endDate).format("YYYY-MM-DD"),
        amount: payload.hotelPayDetails.amount,
        payment_mode: "payathotel",
        number_of_guests: payload.hotelPayDetails.guests,
        number_of_rooms: payload.hotelPayDetails.rooms,
        mobile: mobileNo,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

function* hotelPaySaga({ payload }) {
  try {
    const sagaHotelPay = yield call(atHotelPayAsync, payload);
    console.log("sagaHotelPay", sagaHotelPay);
    yield put(hotelpaySuccess(sagaHotelPay));
  } catch (err) {
    console.log("errr", err);
  }
}

function* sethotelBookingSaga({ payload }) {
  try {
    const apiSetHotel = yield call(sethotelbookingAsync, payload);
    console.log("apiSetHotel", apiSetHotel);
    yield put(setBookHotelSuccess(apiSetHotel));
  } catch (err) {
    console.log(err.message);
  }
}

const setPrehomeInterestSagaAsync = async (payload) =>
  axios
    .post(`${API_PATH}/api/v1/packages/sort`, payload)
    .then((res) => res.data.data)
    .catch((err) => err);

const setPrehomeDestinationSagaAsync = async (payload) =>
  axios
    .post(`${API_PATH}/api/v1/destinations/sort`, payload)
    .then((res) => res.data.data)
    .catch((err) => err);

function* setPrehomeInterestSaga({ payload }) {
  try {
    const apiSetHotel = yield call(setPrehomeInterestSagaAsync, payload);
    const apiSetDest = yield call(setPrehomeDestinationSagaAsync, payload);
    console.log({ apiSetHotel });
    yield put(setinterestprehomeSuccess(apiSetHotel));
    yield put(setDestinationprehomeSuccess(apiSetDest));
  } catch (err) {
    console.log(err.message);
  }
}

function* setHotel() {
  yield takeEvery(SET_BOOK_HOTEL_SUCCESS, sethotelBookingSaga);
}

function* hotelPay() {
  yield takeEvery(HOTEL_PAY, hotelPaySaga);
}

function* setPrehome() {
  yield takeEvery(SET_INTEREST_PREHOME, setPrehomeInterestSaga);
}
export default function* rootSaga() {
  yield all([fork(getListofHotel)]);
  yield all([fork(setHotel)]);
  yield all([fork(setPrehome)]);
  yield all([fork(hotelPay)]);
}
