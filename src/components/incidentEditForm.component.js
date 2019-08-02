import React, {Component} from "react";
import {Form, Button, Dropdown,Alert} from "react-bootstrap";
import { connect } from "react-redux";
import {editIncident, getIncidentDetails, postIncidentNarrative} from "../redux/actions/incidents.action"
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/es/DropdownItem";
import {createStatusBackground} from "./incident.status";
import {toTitleCase} from "../redux/helper.functions";

class IncidentEditForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            status: "",
            incidentID: "",

        }
    }

    componentDidMount(){
        this.getData();
    }

    //to get previous data//
    getData = () => {
        const{id} = this.props.match.params;
        this.props.getIncidentDetails(id);
        const {foundIncident} = this.props;
        if(foundIncident){
            this.setState({title: foundIncident.title});
            this.setState({description: foundIncident.description});
            this.setState({status: foundIncident.status});
            this.setState({incidentID: foundIncident._id});
        }
        //need to put data from foundIncident to state//
    };

    //for handle change on title and description//
    handleInputChange = key => (e) =>{
        this.setState({[key]: e.target.value});
    };

    //for handling the change on status dropdown//
    handleStatusChange = e => {
        this.setState({status: e.target.innerText});
    };

    //method to send request to "edit" incident//
    saveChangesPressed = (e) => {
        e.preventDefault();
        const { title, description, status, id,incidentID} = this.state;
        this.props.editIncident({ title, description, status, id: incidentID});
    };

    componentWillReceiveProps(nextProps) {
        const {foundIncident} = nextProps;
        if(foundIncident){
            this.setState({title: foundIncident.title});
            this.setState({description: foundIncident.description});
            this.setState({status: foundIncident.status});
            this.setState({incidentID: foundIncident._id});
            this.setState({narrative: foundIncident.narrative});
        }
    }

    compareIncidents = (state,props) => {
        if (!props.foundIncident) return false;
        const {title,description,_id,status} = props.foundIncident || {};
        let count = 0;
        state.title !== title && count++;
        state.description !== description && count++;
        state.status !== status && count++;
        return count === 0 ? `No new modifications` :
            count === 1 ? `${count} modification` : `${count} modifications`;
    };

    postNarrative = () => {
        const {incidentID,newNarrative} = this.state;
        this.props.postIncidentNarrative({id:incidentID,note:newNarrative});
    };

    render() {
        let {status,narrative = [],newNarrative} = this.state;
        return(
            <div>
                <div className="container pt-3 align-self-left">
                    <Form>
                        <Alert variant="info">
                            <div className="d-inline">
                                <div className="text-black t-b">{this.compareIncidents(this.state,this.props)}</div>
                                <div className="d-flex align-items-end justify-content-end">
                                    <Button
                                        onClick={this.saveChangesPressed}
                                        className="brr mr-2"
                                        type="submit">
                                        Save Changes
                                    </Button>
                                    <Button
                                        onClick={()=>window.location.href+=""}
                                        className="brr"
                                        variant="light"
                                        type="submit">
                                        Cancel
                                    </Button>
                                </div>
                            </div>

                        </Alert>


                        <Form.Group>
                            <Form.Label className="t-b">Title</Form.Label>
                            <Form.Control type="Title" value={this.state.title} onChange={this.handleInputChange("title")} placeholder="Enter a title for incident"/>
                        </Form.Group>

                        <Form.Group>


                            <Form.Label className="t-b">Status</Form.Label>
                            <Dropdown disabled>
                                <Dropdown.Toggle id="dropdown-basic" variant={createStatusBackground(status)}>
                                    {toTitleCase(status)}
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <DropdownItem onClick={this.handleStatusChange}>Active</DropdownItem>
                                <DropdownItem onClick={ e => this.handleStatusChange(e)}>Resolved</DropdownItem>
                                <DropdownItem onClick={ e => this.handleStatusChange(e)}>Cancelled</DropdownItem>
                            </Dropdown.Menu>
                        </Dropdown>

                        </Form.Group>
                        

                        <Form.Group>
                            <Form.Label className="t-b">Description</Form.Label>
                            <Form.Control as="textarea" rows="3" value={this.state.description} onChange={this.handleInputChange("description")} placeholder="Enter a description for incident" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="t-b">Narrative</Form.Label>
                            <Form.Control as="textarea" rows="3" value={newNarrative} onChange={this.handleInputChange("newNarrative")} placeholder="Add a new narrative" />
                            <Button
                                variant="success"
                                onClick={this.postNarrative}
                                className="mt-3">
                                Add
                            </Button>
                        </Form.Group>

                        <Dropdown.Divider/>

                        <Form.Label className="t-b">Narrative history</Form.Label> <br/>

                        {narrative == false &&
                            <Alert variant="warning" className="p-5">
                                Incident currently doesn't have any narrative history
                            </Alert>
                        }

                        {narrative.map(n => {
                            return <div key={n.timestamp} className="alert alert-info p-3 d-flex justify-content-between">
                                <h6>{n.note}</h6>
                                <p className="float-right">
                                    {new Date(n.timestamp).toLocaleDateString()}{"    "}
                                    {new Date(n.timestamp).toLocaleTimeString()}
                                </p>
                            </div>
                        })}

                        <Button
                            onClick={this.saveChangesPressed}
                            className="brr mt-3 mr-3"
                            type="submit">
                            Save Changes
                        </Button>
                        <Button
                            onClick={()=>window.location.href+=""}
                            className="brr mt-3"
                            variant="light"
                            type="submit">
                            Cancel
                        </Button>
                    </Form>
                </div>
            </div>
        );
    };
};

export default connect((state => state.incident), {getIncidentDetails, editIncident, postIncidentNarrative}) (IncidentEditForm);