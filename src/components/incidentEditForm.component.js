import React, {Component} from "react";
import {Form, Button, Dropdown} from "react-bootstrap";
import { connect } from "react-redux";
import {getIncidentDetails} from "../redux/actions/incidents.action"
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/es/DropdownItem";

class IncidentEditForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: "",
            status: ""
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
            console.log(foundIncident);
            console.log("this is from getdata");
            this.setState({title: foundIncident.title});
            this.setState({description: foundIncident.description});
            this.setState({status: foundIncident.status});
        }
        //need to put data from foundIncident to state//
        //this.setState({title: foundIncident.title});
    };
    //for handle change on title and description//
    handleInputChange = key => (e) =>{
        this.setState({[key]: e.target.value});
        console.log(this.state)
    };

    //for handling the change on status dropdown//
    handleStatusChange = e => {
        this.setState({status: e.target.innerText});
    }
    render(){
        return(
            <div>
                <div className="container incident-form align-self-left">
                    <Form>
                        <Form.Group>
                            <Form.Label className="t-b">Title</Form.Label>
                            <Form.Control type="Title" value={this.state.title} onChange={this.handleInputChange("title")} placeholder="Enter a title for incident"/>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label className="t-b">Status</Form.Label>
                            <DropdownButton title={this.state.status}>
                                <DropdownItem onClick={ e => this.handleStatusChange(e)}>Active</DropdownItem>
                                <DropdownItem onClick={ e => this.handleStatusChange(e)}>Resolved</DropdownItem>
                                <DropdownItem onClick={ e => this.handleStatusChange(e)}>Cancelled</DropdownItem>
                            </DropdownButton>
                        </Form.Group>
                        

                        <Form.Group>
                            <Form.Label className="t-b">Description</Form.Label>
                            <Form.Control as="textarea" rows="3" value={this.state.description} onChange={this.handleInputChange("description")} placeholder="Enter a description for incident" />
                        </Form.Group>

                        <Button
                            className="brr "
                            type="submit" onClick={this.onSubmit}>
                            Save Changes
                        </Button>
                    </Form>
                </div>
            </div>
        );
    };
};

export default connect((state => state.incident), {getIncidentDetails}) (IncidentEditForm);