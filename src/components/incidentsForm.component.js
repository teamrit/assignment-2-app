import React, { Component } from "react";
import {connect} from "react-redux";
import {createIncident} from "../redux/actions/incidents.action"; 
import Navbar from "./navbar.component";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class IncidentForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        }
    }

    handleInputChange = key => (e) =>{
        this.setState({[key]: e.target.value})
    }

    createIncident = (e) => {
        const {title, description} = this.state;
        this.props.createIncident(title, description)
    }

    render(){
        return(
            <div>
                <Navbar />
                <div className="container incident-form">
                    <Modal.Dialog>
                        <Modal.Title>Create New Incident</Modal.Title>
                            <Modal.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Control type="Title" value={this.state.title} onChange={this.handleInputChange("title")} placeholder="Enter a title for incident"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control as="textarea" rows="3" value={this.state.description} onChange={this.handleInputChange('description')} placeholder="Enter a description for incident" />
                                    </Form.Group>

                                    <Button type="submit">Create Incident</Button>
                                </Form>
                                </Modal.Body>
                    </Modal.Dialog>
                </div>    
            </div>
            
        )
    }
}

export default connect((state => state), {createIncident})(IncidentForm);