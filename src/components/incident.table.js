import React from "react";
import {Table,Button} from "react-bootstrap";
import {beautifyDate, toTitleCase} from "../redux/helper.functions";
import {NavItemIcon} from "./navbar.component";
import {Link} from "react-router-dom";

export const IncidentTable = ({incidents}) => {
    return (
        <Table
            variant="dark"
            striped bordered hover
            // size="sm"
            className="mt-3 align-items-center rounded border">
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Created On</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {incidents.map(i => (
                <tr key={i._id}>
                    <td>
                        <Link to={`/incident/${i._id}/details`} className="a-link">
                            {i.title}
                        </Link>
                    </td>
                    <td>{i.description}</td>
                    <td>{toTitleCase(i.status)}</td>
                    <td>{beautifyDate(i.createdOn)}</td>
                    <td className="text-white">
                        <Button size="sm" variant="info" className="mr-2">
                            <NavItemIcon icon="fa-pencil"/>
                        </Button>
                        <Button size="sm" variant="danger">
                            <NavItemIcon icon="fa-delete"/>
                        </Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};