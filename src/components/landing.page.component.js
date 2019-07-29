import React from 'react';
import NavigationBar from "./navbar.component";
import {Jumbotron, Button} from "react-bootstrap";

export const Feature = () => {
  return (
      <div className="border rounded p-3">
          <img src="https://cdn4.iconfinder.com/data/icons/project-management-5-3/65/247-512.png" alt="" className="img-thumbnail"/>
          Hello
      </div>
  )
};

export const LandingPage = () => {
    return (
        <div>
            <NavigationBar />
            <Jumbotron>
                <h1 className="t-b mb-1">Welcome to Incible!</h1>
                <p>
                    Incident management made easy. <br/>
                </p>
                <h4 className='t-b mt-3'>
                    The invincible incident management software written by professionals.
                </h4>
                <p className="mt-3">
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
            <div className="container">
                <div className="row">
                    <div className="col-3 p-2">
                        <Feature />
                    </div>
                    <div className="col-3 p-2">
                        <Feature />
                    </div>
                    <div className="col-3 p-2">
                        <Feature />
                    </div>
                    <div className="col-3 p-2">
                        <Feature />
                    </div>
                </div>
            </div>
        </div>
    );
};
