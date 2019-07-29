import axios from "axios";
import {USER,INCIDENT} from "../constants";
import {resolveHost} from "../helper.functions";
import {getAuthorized} from "../request.handler";

export function signUpUser(user) {
    return (dispatch, getState) => {
        // console.log(getState());
        console.log(dispatch,getState);
        const request = axios.get(resolveHost("/status"));
        request.then(({ data }) => {
            dispatch({ type: USER.SIGN_UP.SUCCESS, payload: data });
        });
    };
}

export function logout() {
    return (dispatch, getState) => {
        resetUserToken();
        dispatch({type: USER.SIGN_OUT.SUCCESS, payload: {}});
    };
}

export function signIn(credentials) {
    return (dispatch, getState) => {
        resetUserToken();
        const request = axios.post(resolveHost("/user/login"), credentials);
        request.then(r => {
            dispatch({type: USER.SIGN_IN.SUCCESS, payload: r.data});
        }).catch(e => {
            dispatch({type: USER.SIGN_IN.FAILURE, payload: e});
        })
    };
}

export function resetUserToken() {
    sessionStorage.removeItem("jwtToken");
}

export function setUserToken(token) {
    sessionStorage.setItem("jwtToken",token);
}

export function loadUserTokenFromStorage() {
    return (dispatch, getState) => {
        let token = sessionStorage.getItem("jwtToken");
        if(!token || token === "") {
            // Return if no token
            return;
        }
        dispatch({type: USER.SET.TOKEN, payload: token });
        return true;
    };
}

export const getToken = () => {
  return sessionStorage.getItem("jwtToken");
};

export function getIncidents() {
    return (dispatch, getState) => {
        if (loadUserTokenFromStorage()) {
            const request = getAuthorized(resolveHost("/incident"), getToken())
            request.then(({ data }) => {
                dispatch({ type: INCIDENT.GET.SUCCESS, payload: data });
            }).catch(error => {
                dispatch({ type: INCIDENT.GET.FAILURE, payload: error });
            });
        }
    };
}