import React, {Component} from 'react';
import {beautifyDate} from "../redux/helper.functions";
import {IncidentStatus} from "./incident.status";
import {Button,Dropdown} from "react-bootstrap";
import {NavItemIcon} from "./navbar.component";
import {Link} from "react-router-dom";

export const IncidentListItem = ({incident= {} , deleteHandler}) => {
    return (
        <div key={incident._id} className={"border p-4 rounded mt-3 text-align-left container text-left bg-eggshell shadow-lg"}>
            <h5 className="t-b">
                <Link to={`/incident/${incident._id}/details`}>
                    <div className="d-inline">
                            {incident.title}
                    </div>
                    <div className="d-inline">
                        <IncidentStatus status={incident.status} />
                    </div>
                </Link>
            <div className="float-right">{beautifyDate(incident.createdOn)}</div>
            </h5>
            <p>{incident.description}</p>
            <div className="mt-2 p-2">
                <Dropdown.Divider />
            </div>
            <div className="p-2">
                <Link to={`/incident/${incident._id}/edit`} className="btn btn-sm mr-2 btn-info btn-sm brr t-b">
                    <NavItemIcon icon="fa-edit"/>
                    Edit
                </Link>
                <Button type="submit" className="btn-sm bg-hiphop mr-2 brr t-b" onClick={deleteHandler}>
                    <NavItemIcon icon="fa-trash"/>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default IncidentListItem;