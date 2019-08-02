import React from "react";
import {Form,Button} from 'react-bootstrap';
import {beautifyDate} from "../redux/helper.functions";

const UserProfile = (props) => {
    const {user = {}} = props;
    const {firstName, lastName, email,joinedOn,lastLoggedIn} = user;
    return (
        <div className="p-2">
            <div className="bg-eggshell m-sm-2 m-xl-4 p-3 shadow-lg border rounded">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-3 col-sm-12">
                            <img src="/dp-holder.png" alt="" className="img-thumbnail"/>
                        </div>
                        <div className="col-xl-9 col-md-9 col-sm-12">
                            <div className="p-3">
                                <h2 className="t-b">{firstName}{"   "}{lastName}</h2>
                                <p>{email}</p>
                                <div className="pt-2">
                                    <div className="t-b">
                                        Joined on:
                                    </div>
                                    {beautifyDate(joinedOn)}
                                </div>
                                <div className="pt-5">
                                    <div className="t-b">
                                        Last logged on:
                                    </div>
                                    {beautifyDate(lastLoggedIn)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;