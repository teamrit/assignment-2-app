import React, {Component, Suspense} from 'react';
import NavigationBar, {NavItemIcon} from "./navbar.component";
import connect from "react-redux/es/connect/connect";
import {getUserProfile, getUsers} from "../redux/actions/users.action";
import {Container, Dropdown, Tab, Tabs} from 'react-bootstrap';

const UserProfile = React.lazy(() => import('./user.profile'));

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "all"
        };
    }

    static renderUser(user) {
        return <div key={user._id} className={"border p-4 rounded mt-3 text-align-left container text-left bg-eggshell shadow"}>
            <h5 className="t-b ">
                {user.lastName}, {user.firstName}
            </h5>
            <p>
                <NavItemIcon icon="fa-envelope" />
                {user.email}
            </p>
            <div className="row">
                <div className="col-md-2 p-2">
                    <a href={`mailto:${user.email}`} className="btn btn-sm bg-rumble text-white brr">
                        <NavItemIcon icon={"fa-envelope"} />Email
                    </a>
                </div>
            </div>
            <p>{user.description}</p>
            <Dropdown.Divider />
        </div>
    }

    componentDidMount() {
        this.props.getUsers();
        this.props.getUserProfile();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const page = nextProps.match.params.page;
        return {
            ...prevState,
            page: page || "all"
        }
    }

    render() {
        const {users = [], userProfile} = this.props;
        const {page} = this.state;
        return (
            <React.Fragment>
                <Container>
                    <h1 className="t-b pt-3 pb-3">Users</h1>
                    {/*<Redirect from={"/users"} to={"/user/all"} />*/}
                    <Tabs
                        onSelect={(option) => {
                            // this.changePageName(option)}
                            this.props.history.push(`/users/${option}`)
                        }}
                        defaultActiveKey="home" activeKey={page}>
                        <Tab
                            eventKey="all" title={<div className="t-b"><NavItemIcon icon={"fa-users"}/>All users</div>}>
                            {users.map(r => UsersList.renderUser(r))}
                        </Tab>
                        <Tab eventKey="profile" title={<div className="t-b"><NavItemIcon icon={"fa-user"}/>My Profile</div>} >
                            <Suspense fallback={<div>Loading...</div>}>
                                <UserProfile user={userProfile} />
                            </Suspense>
                        </Tab>
                    </Tabs>
                </Container>
            </React.Fragment>
        );
    }
}

export default connect((state => state.user), {getUsers, getUserProfile})(UsersList);