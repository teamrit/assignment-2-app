import {CREATE_INCIDENT} from "../constants";
import axios from "axios";
import {resolveHost} from "../helper.functions";

//function to make an api request to create a new incident//
export const createIncident = (values) => {
    return(dispatch) => {
        const request = axios.post(resolveHost("/incident/"), values);
        request.then(({data}) => {
            dispatch({type: CREATE_INCIDENT, payload: data})
        });
        console.log("This is from incident action")
    }
};