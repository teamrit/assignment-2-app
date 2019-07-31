import React from "react";
import {STATUS} from "../redux/constants";
import Badge from "../../node_modules/react-bootstrap/Badge";
import {toTitleCase} from "../redux/helper.functions";

export const createStatusBackground = (arg) => {
    let status = arg.toUpperCase();
    switch (status) {
        case STATUS.ACTIVE:
            return "bg-success ";
        case STATUS.DELETED:
            return "bg-danger ";
        case STATUS.PAUSE:
            return "bg-warning ";
        default :
            return "";
    }
};

export const IncidentStatus = (props = {}) => {
    return (
        <h5>
            <Badge variant="success">
                {toTitleCase(props.status)}
            </Badge>
        </h5>
    );
};