import React from "react";
import {Dropdown} from "react-bootstrap";
import {NavItemIcon} from "./navbar.component";
import {toTitleCase} from "../redux/helper.functions";

const IncidentFilterOption = ({onChangeOption,label,selected}) => {
    return (<Dropdown.Item onClick={e => onChangeOption(e.target.innerText)}>
        {selected === label && <NavItemIcon icon="fa-check"/>}
        {label}
    </Dropdown.Item>);
};

export const IncidentFilter = ({onChangeOption,selected}) => {
    return (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            {toTitleCase(selected)}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <IncidentFilterOption
                onChangeOption={onChangeOption}
                selected={selected}
                label="All"
            />
            <IncidentFilterOption
                onChangeOption={onChangeOption}
                selected={selected}
                label="Open"
            />
            <IncidentFilterOption
                onChangeOption={onChangeOption}
                selected={selected}
                label="Resolved"
            />
            <IncidentFilterOption
                onChangeOption={onChangeOption}
                selected={selected}
                label="Cancelled"
            />

        </Dropdown.Menu>
    </Dropdown>)
};