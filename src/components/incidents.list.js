import React, {Component} from 'react';
import NavigationBar from "./navbar.component";
import connect from "react-redux/es/connect/connect";
import {getIncidents, signIn} from "../redux/actions/users.action";
import {IncidentStatus} from "./incident.status";

class IncidentsList extends Component {

    renderIncident(incident) {
        return <div key={incident._id} className={"border p-4 rounded mt-3 text-align-left container text-left bg-eggshell"}>
            <h5 className="t-b">{incident.title}</h5>
            <p>{incident.description}</p>
            <IncidentStatus />
        </div>
    }

    componentDidMount() {
        this.props.getIncidents();
    }

    render() {
        const {incidents = []} = this.props;
        return (
            <React.Fragment>
                <NavigationBar />
                <div className="container">
                    <h1 className="t-b pt-3 pb-3">Incident List </h1>
                    <i className="fa fas fa-pen-square"/>
                    {incidents.map(r => this.renderIncident(r))}
                </div>
            </React.Fragment>
        );
    }
}

export default connect((state => state.incident), {getIncidents: getIncidents})(IncidentsList);