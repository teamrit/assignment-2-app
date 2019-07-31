import React, {Component} from 'react';
import NavigationBar, {NavItemIcon} from "./navbar.component";
import {Container, Tab, Tabs} from "react-bootstrap";
import {Switch,Route} from "react-router-dom";

const IncidentItem = (props) => {
    let print = (props) => {
        console.log(props)
    }

    return (
        <React.Fragment>
            <NavigationBar />
            <Container>
                <h1 className="t-b pt-3 pb-3">Incident Item </h1>
                <Switch>
                    <Route path="/incident/:id/details" component={() => <div>Details</div>} />
                    <Route path="/incident/:id/edit" component={() => <div>Edit</div>} />
                </Switch>
            </Container>
        </React.Fragment>
    );
};

export default IncidentItem;