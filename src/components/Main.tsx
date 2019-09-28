import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {NavigationBar} from "./NavigationBar";
import {Route} from "react-router-dom";
import {Signup} from "../pages/Signup";
import {Login} from "../pages/Login";
import LandingPage from "../pages/LandingPage";
import {IncidentsPage} from "../pages/IncidentsPage";
import {UserProfile} from "../pages/UserProfile";


export const Main: React.FC = () => {
  return (<React.Fragment>
    <Router>
      <NavigationBar />
      <Route path="/" exact component={LandingPage} />
      <Route path="/signup" component={Signup}/>
      <Route path="/signup/:stage" component={Signup}/>
      <Route path="/profile" component={UserProfile}/>
      <Route path="/login" component={Login}/>
      <Route path="/incidents" component={IncidentsPage}/>
    </Router>
  </React.Fragment>);
};
