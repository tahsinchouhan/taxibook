import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { CREATE_DM_PASS, CREATE_DM_PASS_TWO, GET_TRIP_BY_ROUTE_ID } from "../actions";
import { API_PATH } from "../../Path/Path";
import axios from 'axios'
import { setDmPassId, setentyPassId } from "./actions";


const createTravelPassRequest = async (payload) =>
    await axios.post(`${API_PATH}/api/v1/travelpass/create`, {
        'Content-Type' : 'application/x-www-form-urlencoded',
        crossdomain: true,
        withCredentials: false,
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
        dm_pass_number: payload.dm_pass_number,
        mobile: payload.mobile,
        createdby: JSON.parse(localStorage.getItem('user_data'))?.user?._id,
    })
        .then(vendor => vendor.data)
        .catch(error => error);

const createDmPassRequest = async (payload) =>
    await axios.post(`${API_PATH}/api/v1/dmpass/create`, payload)
        .then(busticket => busticket.data)
        .catch(error => error);

function* createDmPassOfTraveller({ payload }) {
    console.log("pay:::::::", payload);
    const phone = localStorage.getItem("mobile")
    console.log("mobile data",phone);
    try {
        const dmpass = yield call(createTravelPassRequest, payload);
        const vehicle = yield call(createVehiclePassRequest, { ...payload, tp_id: dmpass.data._id, mobile:phone });
        const dm = yield call(createDmPassRequest, { tp_id: dmpass.data._id, vp_id: vehicle.data._id });
        console.log("(dm.data.dm_pass_id",dm.data.dm_pass_id);       
        yield put(setDmPassId(dm.data.dm_pass_id));

        // console.log("bus",busticket);
    } catch (error) {
        // yield put(getRoutesError(error));
    }
}

function* createDmPass({ payload }) {
    console.log("paydata", payload);
    try {
        const dmpass = yield call(createTravelPassRequest, payload);
        const vehicle = yield call(createVehiclePassRequest, { ...payload, tp_id: dmpass.data._id });
        const dm = yield call(createDmPassRequest, { tp_id: dmpass.data._id, vp_id: vehicle.data._id, mobile:localStorage.getItem("mobile") });
        const entry = yield call(createEntryPassRequest, { ...payload, tp_id: dmpass.data._id, vp_id: vehicle.data._id, dm_pass_number:dm.data.dm_pass_id });
        console.log("(dm.data",dm.data);
        yield put(setDmPassId(dm.data.dm_pass_id));
        // console.log("bus",busticket);
    } catch (error) {
        // yield put(getRoutesError(error));
    }
}

function* createEntryPass({ payload }) {
    console.log("paydata", payload);
    try {
        const dmpass = yield call(createTravelPassRequest, payload);
        const vehicle = yield call(createVehiclePassRequest, { ...payload, tp_id: dmpass.data._id });
        const dm = yield call(createDmPassRequest, { tp_id: dmpass.data._id, vp_id: vehicle.data._id });
        const entry = yield call(createEntryPassRequest, { ...payload, tp_id: dmpass.data._id, vp_id: vehicle.data._id, dm_pass_number:dm.data.dm_pass_id });
        yield put(setentyPassId(entry.data.dm_pass_id));
        // console.log("bus",busticket);
    } catch (error) {
        // yield put(getRoutesError(error));
    }
}

export function* addDmPass() {
    yield takeEvery(CREATE_DM_PASS, createDmPass);
}

export function* addDmPassTwo() {
    yield takeEvery(CREATE_DM_PASS_TWO, createDmPassOfTraveller);
}

export default function* rootSaga() {
    yield all([fork(addDmPass)])
    yield all([fork(addDmPassTwo)])
}