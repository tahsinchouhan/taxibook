import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API_PATH } from "../../Path/Path";
import axios from "axios";
import * as moment from "moment";
import {
  GET_BOOK_HOTEL,
  GET_BOOK_HOTEL_SUCCESS,
} from "../actions";
import {getBookHotel,getBookHotelSuccess} from './actions';

const getBookHotellistAsync = async (payload) =>{
  let check_in =moment(payload.startDate).format("YYYY-MM-DD");
  let address =payload.sendlocation;
  let check_out =moment(payload.endDate).format("YYYY-MM-DD");;
  return await fetch(
    `${API_PATH}/api/v2/room/set?address=${address}&check_in=${check_in}&check_out=${check_out}`
  )
    .then((response) => response.json())
    .then((json) => json);
}

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


 export default function* rootSaga() {
      yield all([fork(getListofHotel)]);
    }