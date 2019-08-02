import React, {Component, Suspense} from 'react';
import NavigationBar, {NavItemIcon} from "./navbar.component";
import connect from "react-redux/es/connect/connect";
import {getUserProfile, getUsers} from "../redux/actions/users.action";
import {Container, Dropdown, Tab, Tabs} from 'react-bootstrap';
import {UserProfile} from "./user.item";

const UserLoggedInProfile = React.lazy(() => import('./user.profile'));

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "all",
            firstName: "",
            lastName: ""
        };
    }

    componentDidMount() {
        const {getUsers, getUserProfile, userProfile} = this.props;
        getUsers();
        getUserProfile();
        this.setState({
            firstName: userProfile.firstName,
            lastName: userProfile.lastName
        })
    }

    handleInputChange = key => e => {
        console.log(key,e);
        this.setState({[key]: e.target.value})
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        const {userProfile} = nextProps;
        const page = nextProps.match.params.page;
        return {
            ...prevState,
            page: page || "all",
            firstName: userProfile.firstName,
            lastName: userProfile.lastName
        }
    }

    render() {
        const {users = [], userProfile} = this.props;
        const {page,firstName,lastName} = this.state;
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
                            {users.map(r => <UserProfile user={r} key={r._id} />)}
                        </Tab>
                        <Tab eventKey="profile" title={<div className="t-b"><NavItemIcon icon={"fa-user"}/>My Profile</div>} >
                            <Suspense fallback={<div>Loading...</div>}>
                                <UserLoggedInProfile
                                    firstName={firstName}
                                    lastName={lastName}
                                    user={userProfile}
                                    handleInputChange={this.handleInputChange}
                                />
                            </Suspense>
                        </Tab>
                    </Tabs>
                </Container>
            </React.Fragment>
        );
    }
}

export default connect((state => state.user), {getUsers, getUserProfile})(UsersList);