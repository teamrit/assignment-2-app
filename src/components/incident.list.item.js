import React, {Component} from 'react';
import {beautifyDate} from "../redux/helper.functions";
import {IncidentStatus} from "./incident.status";
import Dropdown from "../../node_modules/react-bootstrap/es/Dropdown";
import Button from "../../node_modules/react-bootstrap/Button";
import {NavItemIcon} from "./navbar.component";
import {Link} from "react-router-dom";

export const IncidentListItem = ({incident= {} , deleteHandler}) => {
    return (
        <div key={incident._id} className={"border p-4 rounded mt-3 text-align-left container text-left bg-eggshell"}>
            <h5 className="t-b">
                <Link to={`/incident/${incident._id}/details`}>
                    {incident.title}
                </Link>
            <div className="float-right">{beautifyDate(incident.created)}</div>
            </h5>
            <p>{incident.description}</p>
            <IncidentStatus status={incident.status} />

            <div className="mt-2 p-2">
                <Dropdown.Divider />
            </div>
            <div className="p-2">
                <Button type="submit" className="btn-sm bg-hiphop mr-2" onClick={deleteHandler}>
                    <NavItemIcon icon="fa-trash"/>
                    Delete
                </Button>
                <Link to={`/incident/${incident._id}/edit`} className="btn btn-sm btn-info btn-sm">
                    <NavItemIcon icon="fa-edit"/>
                    Edit
                </Link>
            </div>
        </div>
    );
}

export default IncidentListItem;