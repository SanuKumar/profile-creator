import React from "react";
import { Router, Route } from "react-router-dom";
import Landing from "../components/landing";
import HomePage from "../components/homepage";
import history from "../history";
import Profile from "../components/homepage/profile";

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" exact component={Landing} />
        <Route path="/homePage" component={HomePage} />
        <Route path="/profile" component={Profile} />
      </Router>
    );
  }
}

export default Routes;
