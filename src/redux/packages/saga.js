import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { PACKAGES_BOOKING } from "../actions";
import { packagesbookingsuccess, packagesbookingerror } from "./actions";
import { API_PATH } from "../../Path/Path";

import axios from "axios";

const packagesBookingCallAsync = async (payload) =>
  await axios
    .get(API_PATH + `/api/v1/packages/booking`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("erooo  group", error);
      return error;
    });

function* packagesBookingDetails({ payload }) {
  try {
    const packages = yield call(packagesBookingCallAsync, payload);
    yield put(packagesbookingsuccess(packages));
  } catch (error) {
    console.log("Error::::", error);
    yield put(packagesbookingerror(error));
  }
}

export function* addPackages() {
  yield takeEvery(PACKAGES_BOOKING, packagesBookingDetails);
}

export default function* rootSaga() {
  yield all([fork(addPackages)]);
}
