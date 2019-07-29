import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {logout} from "../redux/actions/users.action";

class Logout extends Component {

    componentDidMount() {
        this.props.logout();
        setTimeout(() => {
            this.props.history.push("/login")
        },1500);
    }

    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="align-middle pt-4 t-b">Logging you out...</h2>
                            <img src="https://i.redd.it/ounq1mw5kdxy.gif" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state => state), {logout: logout})(Logout);