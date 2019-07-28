import React, { Component } from "react";
import Navbar from "./navbar.component";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

export default class IncidentForm extends Component{

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

    onSubmit = (e) => {

    }

    render(){
        return(
            <div>
                <Navbar />
                <div className="container incident-form">
                    <Form >
                        <Form.Group>
                            <Form.Control type="Title" value={this.state.title} onChange={this.handleInputChange("title")} placeholder="Enter a title for incident"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="textarea" rows="3" value={this.state.description} onChange={this.handleInputChange('description')} placeholder="Enter a description for incident" />
                        </Form.Group>

                        <Button type="submit">Create Incident</Button>
                    </Form>
                </div>    
            </div>
            
        )
    }
}