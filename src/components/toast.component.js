import React from "react";
import {Toast} from "react-bootstrap";

export const Toaster = ({show,onClose,title,description}) => {
    return (
        <Toast
            onClose={onClose} show={show} delay={3000}
            // autohide
            className={"ml-4 mb-4 shadow-lg sfb"}
        >
            <Toast.Header>
                <img
                    src="../incible-logo.png"
                    className="rounded mr-2 pulse-animate"
                    height={20}
                />
                <strong className="mr-auto">{title}</strong>&nbsp;
                <small>few seconds ago</small>
            </Toast.Header>
            <Toast.Body>{description}</Toast.Body>
        </Toast>
    );
};