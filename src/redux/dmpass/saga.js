import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { CREATE_DM_PASS, GET_TRIP_BY_ROUTE_ID } from "../actions";
import { API_PATH } from "../../Path/Path";
import axios from 'axios'
import { setDmPassId } from "./actions";


const createTravelPassRequest = async (payload) =>
    await axios.post(`${API_PATH}/api/v1/travelpass/create`, {
        mobile: payload.mobile,
        duration_of_travel: payload.duration_of_travel,
        start_date: payload.start_date,
        end_date: payload.end_date,
        basic_details: payload.basic_details,
        number_of_travellers: payload.basic_details.length,
        createdby: JSON.parse(localStorage.getItem('user_data'))?.user?._id
    })
        .then(busticket => busticket.data)
        .catch(error => error);

const createVehiclePassRequest = async (payload) =>
    await axios.post(`${API_PATH}/api/v1/vehicalpass/create`, {
        mobile: payload.mobile,
        travelpass_id: payload.tp_id,
        vehical_details: payload.vehical_details,
        number_of_vehicals: payload.vehical_details.length,
        createdby: JSON.parse(localStorage.getItem('user_data'))?.user?._id
    })
        .then(busticket => busticket.data)
        .catch(error => error);

const createEntryPassRequest = async (payload) =>
    await axios.post(`${API_PATH}/api/v1/entrypass/create`, {
        traveller_id: payload.tp_id,
        vehical_pass_id: payload.vp_id,
        locations: payload.locations,
        total_charges: payload.total_charges,
        createdby: JSON.parse(localStorage.getItem('user_data'))?.user?._id,
    })
        .then(vendor => vendor.data)
        .catch(error => error);

const createDmPassRequest = async (payload) =>
    await axios.post(`${API_PATH}/api/v1/dmpass/create`, payload)
        .then(busticket => busticket.data)
        .catch(error => error);

function* createDmPass({ payload }) {
    console.log("pay", payload);
    try {
        const dmpass = yield call(createTravelPassRequest, payload);
        const vehicle = yield call(createVehiclePassRequest, { ...payload, tp_id: dmpass.data._id });
        const entry = yield call(createEntryPassRequest, {  ...payload, tp_id: dmpass.data._id, vp_id: vehicle.data._id });
        const dm = yield call(createDmPassRequest, { tp_id: dmpass.data._id, vp_id: vehicle.data._id });
        yield put(setDmPassId(dm.data.dm_pass_id));
        // console.log("bus",busticket);
    } catch (error) {
        // yield put(getRoutesError(error));
    }
}

export function* addDmPass() {
    yield takeEvery(CREATE_DM_PASS, createDmPass);
}

export default function* rootSaga() {
    yield all([fork(addDmPass)])
}