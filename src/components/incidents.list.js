import React, {Component} from 'react';
import NavigationBar, {NavItemIcon} from "./navbar.component";
import connect from "react-redux/es/connect/connect";
import {getIncidents, getUserProfile, signIn} from "../redux/actions/users.action";
import {Container,Tabs,Tab,Dropdown} from 'react-bootstrap';
import IncidentForm from "../components/incidentsForm.component";
import {deleteIncident} from "../redux/actions/incidents.action";
import {IncidentListItem} from "./incident.list.item";

class IncidentsList extends Component {


    componentDidMount() {
        this.props.getIncidents();
        this.props.getUserProfile();
    }

    onDeletePressed = (id) => (e) => {
        this.props.deleteIncident(id)
    };

    render() {
        const {incidents = [], incident} = this.props;
        console.log(this.props);
        return (
            <React.Fragment>
                <NavigationBar />
                <Container>
                    <h1 className="t-b pt-3 pb-3">Incidents</h1>
                    <Tabs defaultActiveKey="profile"
                          // activeKey={}
                        >
                        <Tab eventKey="profile"
                                  title={<div className="t-b"><NavItemIcon icon={"fa-list"}/>All incidents</div>}
                        >
                            {incidents.map(r =>
                                <IncidentListItem
                                    incident={r}
                                    key={r._id}
                                    deleteHandler={this.onDeletePressed(r._id)}
                                />)
                            }
                        </Tab>
                        <Tab eventKey="home"
                             title={<div className="t-b"><NavItemIcon icon={"fa-plus"}/>Create new</div>}
                        >
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

export default connect((state => state.incident), {getIncidents: getIncidents, deleteIncident, getUserProfile})(IncidentsList);