import React, {Component} from 'react';
import NavigationBar from "./navbar.component";
import connect from "react-redux/es/connect/connect";
import {getIncidents, signIn} from "../redux/actions/users.action";

class IncidentsList extends Component {

    componentDidMount() {
        this.props.getIncidents();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <NavigationBar />
                <h1 className="t-b pt-3 pb-3">Incident List</h1>
            </div>
        );
    }
}

export default connect((state => state), {getIncidents: getIncidents})(IncidentsList);