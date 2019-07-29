import React, {Component} from 'react';
import NavigationBar, {NavItemIcon} from "./navbar.component";
import connect from "react-redux/es/connect/connect";
import {getUsers} from "../redux/actions/users.action";
import {Container, Dropdown, Tab, Tabs} from 'react-bootstrap';

class UsersList extends Component {

    static renderUser(user) {
        return <div key={user._id} className={"border p-4 rounded mt-3 text-align-left container text-left bg-eggshell"}>
            <h5 className="t-b">
                {user.lastName}, {user.firstName}
                {/*<div className="float-right">{beautifyDate(user.created)}</div>*/}
            </h5>
            <p>{user.email}</p>
            <div className="row">
                <div className="col-md-2 p-2">
                    <a href={`mailto:${user.email}`} className="btn btn-sm bg-rumble text-white brr">
                        <NavItemIcon icon={"fa-envelope"} />Email
                    </a>
                </div>
            </div>

            <p>{user.description}</p>
            {/*<IncidentStatus status={user.status} />*/}
            <Dropdown.Divider />
        </div>
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const {users = []} = this.props;
        console.log(this.props)
        return (
            <React.Fragment>
                <NavigationBar />
                <Container>
                    <h1 className="t-b pt-3 pb-3">Users</h1>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="List">
                            {users.map(r => UsersList.renderUser(r))}
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                        </Tab>
                    </Tabs>
                </Container>
            </React.Fragment>
        );
    }
}

export default connect((state => state.user), {getUsers: getUsers})(UsersList);