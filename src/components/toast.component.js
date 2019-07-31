import React from "react";
import {Toast} from "react-bootstrap";

export const Toaster = ({show,onClose,title,description}) => {
    return (
        <Toast
            onClose={onClose} show={show} delay={3000}
            // autohide
            className={"ml-4 mb-4 shadow-lg sfb"}
            style={{animation: '0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s 1 normal both running slide-top'}}
        >
            <Toast.Header>
                <img
                    src="../incible-logo.png"
                    className="rounded mr-2"
                    height={20}
                />
                <strong className="mr-auto">{title}</strong>
                <small>few seconds ago</small>
            </Toast.Header>
            <Toast.Body>{description}</Toast.Body>
        </Toast>
    );
};