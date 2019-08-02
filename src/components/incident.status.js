import React from "react";
import {STATUS} from "../redux/constants";
import Badge from "../../node_modules/react-bootstrap/Badge";
import {toTitleCase} from "../redux/helper.functions";

export const createStatusBackground = (arg) => {
    let status = arg.toUpperCase();
    switch (status) {
        case STATUS.ACTIVE:
            return "primary";
        case STATUS.CANCELLED:
        case STATUS.DELETED:
            return "danger";
        case STATUS.PAUSE:
            return "warning";
        case STATUS.RESOLVED:
            return "success";
        default :
            return "";
    }
};

export const IncidentStatus = (props = {}) => {
    return (
        <Badge variant={createStatusBackground(props.status)} className="ml-2">
            {toTitleCase(props.status)}
        </Badge>
    );
};