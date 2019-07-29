import {getAuthorized, postAuthorized} from "../request.handler";
import {resolveHost} from "../helper.functions";
import {INCIDENT} from "../constants";
import {getToken, loadUserTokenFromStorage} from "./users.action";

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
