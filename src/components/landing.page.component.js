import React from 'react';
import NavigationBar from "./navbar.component";
import {Jumbotron, Button} from "react-bootstrap";

export const Feature = ({imgSource='',title}) => {
  return (
      <div className="border rounded p-3">
          <img src={imgSource} alt="" className="img-thumbnail"/>
          <h3 className="t-b">{title}</h3>
      </div>
  )
};

export const LandingPage = () => {
    return (
        <div>
            <NavigationBar />
            <Jumbotron className="mb-0">
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
                    <div className="col-md-3 p-2">
                        <Feature
                            title="Trusted"
                            imgSource={"https://www.svgrepo.com/show/10927/office-buildings.svg"}
                        />
                    </div>
                    <div className="col-md-3 p-2">
                        <Feature
                            title="Bug free"
                        />
                    </div>
                    <div className="col-md-3 p-2">
                        <Feature />
                    </div>
                    <div className="col-md-3 p-2">
                        <Feature />
                    </div>
                </div>
            </div>
        </div>
    );
};
