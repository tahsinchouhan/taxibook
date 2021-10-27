import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { SET_HOTEL_DATE_DATA ,SET_HOTEL_LIST_DATA } from "../actions";
import { API_PATH } from "../../Path/Path";
import axios from "axios";
import * as moment from "moment";
import {
  gesetHotelDateData,setHtotelListData,
} from "./actions";

const RoomListAsync = async (payload) =>
  await fetch(
    `${API_PATH}/api/v2/room/list`
  )
    .then((response) => response.json())
    .then((json) => json);


const CreateDateHotlAsync = async (payload) =>
  await fetch(
    `${API_PATH}/api/v1/trips/list?date=${moment(
      payload.startDate
    ).format("YYYY-MM-DD")}`
  )
    .then((response) => response.json())
    .then((json) => json);

function* gesetHotelDateDataSaga({ payload }) {
  console.log("DATADTADT:::::", payload);
  try {
    const apiTripByRouteId = yield call(CreateDateHotlAsync, payload);
    yield put(gesetHotelDateData(apiTripByRouteId.data));
  } catch (error) {
    console.log(error);
  }
}


function* RoomList({ payload }) {
  console.log("DATADTADT:::::", payload);
  try {
    const apiRoomList = yield call(RoomListAsync, payload);
    yield put(setHtotelListData(apiRoomList.data));
  } catch (error) {
    console.log(error);

    
    
function* listApi() {
  yield takeEvery(GET_TRIP_BY_ROUTE_ID, TripByRouteId);
}

function* watchGetPlaceholder123() {
  yield takeEvery(SET_HOTEL_DATE_DATA, gesetHotelDateDataSaga);
}

// export function* addBusBooking() {
//   yield takeEvery(CREATE_BUS_BOOKING, createBusBooking);
// }




export default function* rootSaga() {
  yield all([fork(watchGetPlaceholder123)]);
  yield all([fork(listApi)]);
}
