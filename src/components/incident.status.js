import React from "react";
import {STATUS} from "../redux/constants";

export const createStatusBackground = (arg) => {
    let status = arg.toUpperCase();
    switch (status) {
        case STATUS.ACTIVE:
            return "bg-success ";
        case STATUS.DELETE:
            return "bg-danger ";
        case STATUS.PAUSE:
            return "bg-warning ";
        return "";
    }
};

export const IncidentStatus = (props = {}) => {
    return (
        <span className={`${createStatusBackground(props.status)} p-1 border rounded text-white`}>{props.status}</span>
    );
};