import {deleteAuthorized, getAuthorized, postAuthorized, putAuthorized} from "../request.handler";
import {resolveHost} from "../helper.functions";
import {HTTP_METHOD, INCIDENT} from "../constants";
import {getIncidents, getToken, loadUserTokenFromStorage, useBoilerplateRequestAuthorised} from "./users.action";

export function createIncident(values) {
    return (dispatch, getState) => {
        if (loadUserTokenFromStorage()) {
            const request = postAuthorized(resolveHost("/incident"), getToken(), values);
            request.then(({ data }) => {
                getIncidents()(dispatch,getState);
                dispatch({ type: INCIDENT.CREATE.SUCCESS, payload: data });
            }).catch(error => {
                dispatch({ type: INCIDENT.CREATE.FAILURE, payload: error });
            });
        }
    };
}

export function changeFilter(data) {
    return (dispatch, getState) => {
        dispatch({ type: INCIDENT.CHANGE_FILTER.SUCCESS, payload: data });
        getIncidents()(dispatch,getState);
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

export function getIncidentDetails(id) {
    return(dispatch, getState) => {
        const request = getAuthorized(resolveHost(`/incident/${id}`), getToken());
        request.then(({data}) => {
            dispatch({type: INCIDENT.DETAILS.SUCCESS, payload: data});
            getIncidents()(dispatch,getState);
        }).catch(error => {
            dispatch({ type: INCIDENT.DETAILS.FAILURE, payload: error });
        });
    }
}

export function editIncident(values) {
    return(dispatch, getState) => {
        const request = putAuthorized(resolveHost(`/incident/${values.id}`), getToken(), values);
        request.then(({data}) => {
           dispatch({type: INCIDENT.EDIT.SUCCESS, payload: data});
        }).catch(error => {
            dispatch({type: INCIDENT.EDIT.FAILURE, payload: error})
        });
    }
}
