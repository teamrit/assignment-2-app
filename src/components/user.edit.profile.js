import React from "react";
import {Form,Button} from 'react-bootstrap';

const UserProfile = (props) => {
    const {user = {}} = props;
    const {firstName, lastName, email} = user;
    return (
        <div className="p-2">
            <div className="bg-eggshell m-sm-2 m-xl-4 p-3">
                {JSON.stringify(user)}
                <Form className="pt-3">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="t-b">First Name</Form.Label>
                        <Form.Control disabled type="text" placeholder="First name" value={firstName} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="t-b">Last Name</Form.Label>
                        <Form.Control disabled type="text" placeholder="Last name" value={lastName} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="t-b">Last Name</Form.Label>
                        <Form.Control disabled type="email" placeholder="Email" value={email} />
                    </Form.Group>

                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default UserProfile;