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
} from "../actions";
import {
  getBookHotel,
  getBookHotelSuccess,
  setBookHotelSuccess,
  setinterestprehomeSuccess,
  setDestinationprehomeSuccess,
} from "./actions";

const getBookHotellistAsync = async (payload) => {
  let check_in = moment(payload.startDate).format("YYYY-MM-DD");
  let address = payload.sendlocation;
  let check_out = moment(payload.endDate).format("YYYY-MM-DD");
  return await fetch(
    `${API_PATH}/api/v2/room/set?address=${address}&check_in=${check_in}&check_out=${check_out}`
  )
    .then((response) => response.json())
    .then((json) => json);
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
  const user = JSON.parse(localStorage.getItem('user_data'));
  const token = user.token
    axios.post(`${API_PATH}/api/v2/booking/create`,  {
    customer_id:payload?.basic_details?.user_id?._id,
    hotel_id:payload?.basic_details?.hotel_id?._id,
    room_id:payload?.basic_details?._id,
    check_in:payload?.startDate,
    check_out:payload?.endDate,
    amount:payload?.basic_details?.price?.actual_price,
    number_of_guests:payload?.no_of_guest,
    number_of_rooms:payload?.no_of_room,
    amount_with_gst:payload?.total_amount,
    mobile: payload?.mobile,
    email: payload?.email,
    full_name: payload?.name,
  },
  {headers: { Authorization: `Bearer ${token}` }}

  ).then((res) => {
    return res;
  });
};

function* sethotelBookingSaga({ payload }) {
  try {
    const apiSetHotel = yield call(sethotelbookingAsync, payload);
    yield put(setBookHotelSuccess(apiSetHotel.payload));
  } catch (err) {
    console.log(err.message);
  }
}


const setPrehomeInterestSagaAsync = async (payload) => 
    axios.post(`${API_PATH}/api/v1/packages/sort`, 
   payload
  ).then((res) =>res.data.data)
  .catch(err=>err)

  const setPrehomeDestinationSagaAsync = async (payload) => 
  axios.post(`${API_PATH}/api/v1/destinations/sort`, 
 payload
).then((res) =>res.data.data)
.catch(err=>err)

function* setPrehomeInterestSaga({ payload }) {
  try {
    const apiSetHotel = yield call(setPrehomeInterestSagaAsync, payload);
    const apiSetDest = yield call(setPrehomeDestinationSagaAsync, payload);
    console.log({apiSetHotel})
    yield put(setinterestprehomeSuccess(apiSetHotel));
    yield put(setDestinationprehomeSuccess(apiSetDest));
  } catch (err) {
    console.log(err.message);
  }
}

function* setHotel() {
  yield takeEvery(SET_BOOK_HOTEL_SUCCESS, sethotelBookingSaga);
}
function* setPrehome() {
  yield takeEvery(SET_INTEREST_PREHOME, setPrehomeInterestSaga);
}
export default function* rootSaga() {
  yield all([fork(getListofHotel)]);
  yield all([fork(setHotel)]);
  yield all([fork(setPrehome)]);
}
