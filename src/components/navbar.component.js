import React, {Component} from 'react';
import logo from "../incible-logo.png";
import {Link} from "react-router-dom"
import connect from "react-redux/es/connect/connect";
import {highlightNavigationItem} from "../redux/helper.functions";

const NavItem = (props) => {
    return (<li className={`ml-1 pl-1 nav-item navi ${props.className} ${highlightNavigationItem(props.href,window.location.pathname) && 'nav-a'}`}>
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
        const {isLoggedIn, userProfile} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                                <NavItemIcon icon={'fa-home'} />
                                Home <span className="sr-only">(current)</span>
                            </NavItem>
                            <NavItem href={"/incidents"}>
                                <NavItemIcon icon={'fa-indent'} />
                                Incidents
                            </NavItem>
                            <NavItem href={"/users"}>
                                <NavItemIcon icon={'fa-user-friends'} />
                                Users
                            </NavItem>
                            <NavItem href={"/features"}>
                                <NavItemIcon icon={'fa-star'} />
                                Features
                            </NavItem>
                            <NavItem href={"/pricing"}>
                                <NavItemIcon icon={'fa-dollar-sign'} />
                                Pricing
                            </NavItem>
                            <NavItem href={"/about"}>
                                <NavItemIcon icon={'fa-info-circle'} />
                                About
                            </NavItem>
                        </ul>
                        <ul className={"navbar-nav float-right"}>
                            {isLoggedIn && (
                                <div className="text-white text-center" style={{padding:8}}>
                                    Hey! {userProfile.firstName}
                                </div>
                            )}
                            {isLoggedIn && (
                                <NavItem className={"float-right"} href={"/logout"}>
                                    <NavItemIcon icon={'fa-sign-out-alt'} />Logout
                                </NavItem>
                            )}
                            {!isLoggedIn && (
                                <NavItem className={"float-right"} href={"/signup"}>
                                    Signup
                                </NavItem>
                            )}
                            {!isLoggedIn && (
                                <NavItem className={"float-right"} href={"/login"}>
                                    Login
                                </NavItem>
                            )}
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default connect((state => state.user), {
})(NavigationBar);