import {
    SET_DM_DATA,
    // CREATE_DM_PASS,
    SET_DM_PASS_ID,
    DM_PASS_DETAILS
} from "../actions";

const INIT_STATE = {
    dmData: {
        mobile: '',
        start_date: '',
        end_date: '',
        tp_id: '',
        vp_id: '',
        ep_id: '',
        travelpass_id: '',
        vehicalpass_id: '',
        entrypass_id: '',
        dmpass_id: '',
        number_of_vehicals: '',
        number_of_travellers: '',
        duration_of_travel: '',
        basic_details: [],
        vehical_details: [],
        Seleted_Values: [],

    },
};

const dmpassReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_DM_DATA:
            return { ...state, dmData: { ...state.dmData, [action.payload.lbl]: action.payload.value } }

        case SET_DM_PASS_ID:
            return { ...state, dmData: { ...state.dmData, dmpass_id: action.payload } }

        case DM_PASS_DETAILS:
            return { ...state, Seleted_Values: action.payload.data }

        default:
            return {
                ...state,
            };
    }
};
export default dmpassReducer;