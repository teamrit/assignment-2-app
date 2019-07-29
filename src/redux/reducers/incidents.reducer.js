import {INCIDENT} from "../constants";

const initialState = {
    incidents: [],
    fetchDate: null,
    error: {}
};

function incidentReducer(state = initialState, action) {
    switch (action.type) {
        case INCIDENT.GET.SUCCESS:
            return Object.assign({}, state, {
                incidents: action.payload
            });
        case INCIDENT.GET.FAILURE:
            return Object.assign({}, state, {
                error: {title: action.payload}
            });
        default:
            return state
    }
}

export default incidentReducer;