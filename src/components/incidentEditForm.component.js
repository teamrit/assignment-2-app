import React, {Component} from "react";
import {Form, Button, Dropdown} from "react-bootstrap";

class IncidentEditForm extends Component{
    render(){
        return(
            <div>
                <div className="container incident-form align-self-left">
                    <Form>
                        <Form.Group>
                            <Form.Label className="t-b">Title</Form.Label>
                            <Form.Control type="Title" placeholder="Enter a title for incident"/>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label className="t-b">Status</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Incident Status
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item >Active</Dropdown.Item>
                                    <Dropdown.Item >Resolved</Dropdown.Item>
                                    <Dropdown.Item >Cancelled</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                        </Form.Group>
                        

                        <Form.Group>
                            <Form.Label className="t-b">Description</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Enter a description for incident" />
                        </Form.Group>

                        <Button
                            className="brr"
                            type="submit" onClick={this.onSubmit}>
                            Save Changes
                        </Button>
                    </Form>
                </div>
            </div>
        );
    };
};

export default IncidentEditForm;