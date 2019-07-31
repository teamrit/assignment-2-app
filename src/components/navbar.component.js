import React, {Component} from 'react';
import logo from "../incible-logo.png";
import {Link} from "react-router-dom"

const NavItem = (props) => {
    return (<li className="nav-item">
        <Link to={props.href} className="nav-link">
            {props.children}
        </Link>
    </li>)
};

export const NavItemIcon = ({icon = ''}) => {
    return (
        <React.Fragment>
            <i className={`fas ${icon}`}/>&nbsp;{" "}
        </React.Fragment>
    )
  };

class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <div>
                        <i class="fas fa-italic"></i>ncible
                    </div>
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
                </div>
            </nav>
        );
    }
}

export default NavigationBar;