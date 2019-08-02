import React from 'react';
import {Container} from "react-bootstrap";
import {Switch,Route} from "react-router-dom";

const IncidentItem = (props) => {
    let print = (props) => {
        console.log(props)
    };

    const {page} = props.match.params;
    return (
        <React.Fragment>
            <Container>
                <h1 className="t-b pt-3 pb-3">{page == "edit" && "Edit "}Incident Item </h1>
            </Container>
        </React.Fragment>
    );
};

export default IncidentItem;