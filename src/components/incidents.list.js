import React, {Component} from 'react';
import NavigationBar, {NavItemIcon} from "./navbar.component";
import connect from "react-redux/es/connect/connect";
import {getIncidents, signIn} from "../redux/actions/users.action";
import {IncidentStatus} from "./incident.status";
import {beautifyDate} from "../redux/helper.functions";
import {Container,Tabs,Tab,Dropdown} from 'react-bootstrap';
import IncidentForm from "../components/incidentsForm.component";

class IncidentsList extends Component {

    static renderIncident(incident) {
        return <div key={incident._id} className={"border p-4 rounded mt-3 text-align-left container text-left bg-eggshell"}>
            <h5 className="t-b">
                {incident.title}
                <div className="float-right">{beautifyDate(incident.created)}</div>
            </h5>
            <p>{incident.description}</p>
            <IncidentStatus status={incident.status} />
            <Dropdown.Divider />
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
                <Container>
                    <h1 className="t-b pt-3 pb-3">Incident List </h1>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="List">
                            {incidents.map(r => IncidentsList.renderIncident(r))}
                        </Tab>
                        <Tab eventKey="profile" title={<div className="t-b"><NavItemIcon icon={"fa-plus"}/>Create new</div>}>
                            <IncidentForm />
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                        </Tab>
                    </Tabs>
                </Container>
            </React.Fragment>
        );
    }
}

export default connect((state => state.incident), {getIncidents: getIncidents})(IncidentsList);