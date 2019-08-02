import React from "react";
import {NavItemIcon} from "./navbar.component";
import {Dropdown} from "react-bootstrap";

export const UserProfile = ({user}) => {
    return <div key={user._id} className={"border p-4 rounded mt-3 text-align-left container text-left bg-eggshell shadow"}>
        <h5 className="t-b ">
            {user.lastName}, {user.firstName}
        </h5>
        <p>
            <NavItemIcon icon="fa-envelope" />
            {user.email}
        </p>
        <div className="row">
            <div className="col-md-2 p-2">
                <a href={`mailto:${user.email}`} className="btn btn-sm bg-rumble text-white brr">
                    <NavItemIcon icon={"fa-envelope"} />Email
                </a>
            </div>
        </div>
        <p>{user.description}</p>
        <Dropdown.Divider />
    </div>
}