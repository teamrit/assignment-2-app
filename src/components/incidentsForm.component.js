import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import {connect} from "react-redux"
import {createIncident} from "../redux/actions/incidents.action";

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
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {title, description} = this.state
        this.props.createIncident({title, description})
    };

    render(){
        return(
            <div>
                <div className="container incident-form">
                    <Form>
                        <Form.Group>
                            <Form.Control type="Title" value={this.state.title} onChange={this.handleInputChange("title")} placeholder="Enter a title for incident"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="textarea" rows="3" value={this.state.description} onChange={this.handleInputChange('description')} placeholder="Enter a description for incident" />
                        </Form.Group>

                        <Button type="submit" onClick={this.onSubmit}>Create Incident</Button>
                    </Form>
   c             </div>
            </div>
        )
    }
}
export default connect((state => state.incidents), {createIncident}) (IncidentForm)
