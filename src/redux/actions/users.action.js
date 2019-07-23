import axios from "axios";
import {SIGN_UP_USER} from "../constants";

export function signUpUser(user) {
    return (dispatch, getState) => {
        // console.log(getState());
        console.log(dispatch,getState)
        const request = axios.get("http://localhost:8000/status");
        request.then(({ data }) => {
            dispatch({ type: SIGN_UP_USER, payload: data });
        });
    };
}
