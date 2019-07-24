import axios from "axios";
import {GET_INCIDENTS, SIGN_IN_USER, SIGN_UP_USER} from "../constants";
import {resolveHost} from "../helper.functions";

export function signUpUser(user) {
    return (dispatch, getState) => {
        // console.log(getState());
        console.log(dispatch,getState);
        const request = axios.get(resolveHost("/status"));
        request.then(({ data }) => {
            dispatch({ type: SIGN_UP_USER, payload: data });
        });
    };
}

export function signIn(credentials) {
    return (dispatch, getState) => {
        const request = axios.post(resolveHost("/user/login"), credentials);
        request.then(({ data }) => {
            dispatch({ type: SIGN_IN_USER, payload: data });
        });
    };
}

export function getIncidents() {
    return (dispatch, getState) => {
        const request = axios.get(resolveHost("/incident"));
        request.then(({ data }) => {
            console.log(console)
            dispatch({ type: GET_INCIDENTS, payload: data });
        });
    };
}