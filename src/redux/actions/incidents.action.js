import {deleteAuthorized, getAuthorized, postAuthorized} from "../request.handler";
import {resolveHost} from "../helper.functions";
import {INCIDENT} from "../constants";
import {getIncidents, getToken, loadUserTokenFromStorage} from "./users.action";

export function createIncident(values) {
    return (dispatch, getState) => {
        if (loadUserTokenFromStorage()) {
            const request = postAuthorized(resolveHost("/incident"), getToken(), values);
            request.then(({ data }) => {
                dispatch({ type: INCIDENT.CREATE.SUCCESS, payload: data });
            }).catch(error => {
                dispatch({ type: INCIDENT.CREATE.FAILURE, payload: error });
            });
        }
    };
}

export function deleteIncident(id) {
    return(dispatch, getState) => {
        if(loadUserTokenFromStorage()) {
            const request = deleteAuthorized(resolveHost(`/incident/${id}`), getToken());
            request.then(({data}) => {
                dispatch({ type: INCIDENT.DELETE.SUCCESS, payload: data });
                // To keep the true state with the database
                getIncidents()(dispatch,getState);
            }).catch(error => {
                dispatch({ type: INCIDENT.DELETE.FAILURE, payload: error });
            });
        }
    }
}
