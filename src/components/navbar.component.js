import React, {Component} from 'react';
import logo from "../incible-logo.png";
import {Link} from "react-router-dom"

const NavItem = (props) => {
    return (<li className={`nav-item navi ${props.className} ${props.href == window.location.pathname && 'nav-a'}`}>
        <Link to={props.href} className="nav-link">
            {props.children}
        </Link>
    </li>)
};

class NavigationBar extends Component {
    render() {
        const {isLoggedIn} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className="w-logo" alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <NavItem href={"/"}>
                            Home <span className="sr-only">(current)</span>
                        </NavItem>
                        <NavItem href={"/incidents"}>
                            Incidents
                        </NavItem>
                        <NavItem href={"/features"}>
                            Features
                        </NavItem>
                        <NavItem href={"/pricing"}>
                            Pricing
                        </NavItem>
                        <NavItem href={"/about"}>
                            About
                        </NavItem>
                    </ul>
                    <ul className={"navbar-nav float-right"}>
                        <NavItem className={"float-right"} href={"/logout"}>
                            <i className="fa fal fa-sign-out-alt"/>Logout
                        </NavItem>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;