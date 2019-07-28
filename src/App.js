import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Provider } from "react-redux";
import {LandingPage} from "./components/landing.page.component";
import {SignIn} from "./components/signin.component";
import SignUp from "./components/signup.component";
import store from "./redux/store";
import IncidentsList from "./components/incidents.component";
import IncidentForm from "./components/incidentsForm.component";
import axios from "axios";

function App() {

  return (
    <div className="App">
        <Route path="/" exact component={LandingPage} />
        <Route path="/login/" component={SignIn} />
        <Route path="/signup/" component={SignUp} />
        <Route path="/incidents/" exact component={IncidentsList} />
        <Route path="/incidents/new" exact component={IncidentForm} />
        
    </div>
  );
}

const routedApp = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>

);

export default routedApp;
