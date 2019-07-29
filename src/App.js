import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Provider } from "react-redux";
import {LandingPage} from "./components/landing.page.component";
import SignIn from "./components/signin.component";
import SignUp from "./components/signup.component";
import store from "./redux/store";
import IncidentsList from "./components/incidents.list";
import connect from "react-redux/es/connect/connect";
import Logout from "./components/logout.component";
import {loadUserTokenFromStorage} from "./redux/actions/users.action";

class AppI extends React.Component {

    componentDidMount() {
        if (this.props.loadUser()) {
            // window.location.pathname = "/incidents";
        }

    }


    render() {
        return (
            <div className="App">
                <Route path="/" exact component={LandingPage} />
                <Route path="/login/" component={SignIn} />
                <Route path="/logout" component={Logout} />
                <Route path="/signup/" component={SignUp} />
                <Route path="/incidents/" component={IncidentsList} />
            </div>
        );
    }
}

export const App = connect((state => state), {loadUser: loadUserTokenFromStorage})(AppI);

const routedApp = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>

);

export default routedApp;
