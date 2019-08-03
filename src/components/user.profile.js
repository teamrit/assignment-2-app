import React from "react";
import {Form,Button} from 'react-bootstrap';
import {beautifyDate} from "../redux/helper.functions";
import connect from "react-redux/es/connect/connect";
import {editUser} from "../redux/actions/users.action";

const UserProfile = (props) => {
    const {user = {}
        , handleInputChange
        ,firstName,lastName} = props;

    const onChange = (e) => {
        console.log(e);
    }

    const {email,joinedOn,lastLoggedIn} = user;
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
                                <div className="t-b">

                                    <Form.Group>
                                        <Form.Label className="t-b">First Name</Form.Label>
                                        <Form.Control as="input"
                                                      value={firstName}
                                                      onChange={handleInputChange("firstName")}
                                                      />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="t-b">Last Name</Form.Label>
                                        <Form.Control as="input"
                                                      value={lastName}
                                                      onChange={handleInputChange("lastName")}/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="t-b">Email</Form.Label>
                                        <Form.Control type="input" value={email} />
                                    </Form.Group>
                                </div>
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
                                <div className="pt-2">
                                    <Button onClick={() => props.editUser({...user,firstName,lastName})}>Save</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect((state => state.user), {editUser})(UserProfile);
