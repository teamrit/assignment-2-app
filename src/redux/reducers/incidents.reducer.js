import {INCIDENT, INCIDENT_STATUS_MAPPER} from "../constants";

const initialState = {
    incidents: [],
    incident: {},
    fetchDate: null,
    error: {},
    filter: {
        status: "Open"
    }
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
        case INCIDENT.CREATE.SUCCESS:
            return Object.assign({}, state, {
                incident: action.payload
            });
        case INCIDENT.CHANGE_FILTER.SUCCESS:
            return Object.assign({}, state, {
                filter: {
                    ...state.filter,
                    ...action.payload
                }
            });
        case INCIDENT.RESET.SUCCESS:
            return initialState;
        default:
            return state;
    }
}

export default incidentReducer;