import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../Home";
import MovieDetails from "../MovieDetails";
import Movies from "../movies";
import NotFound from "../NotFound";

class AppContent extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" component={Movies} />
          <Route path="/not-found" component={NotFound} />
          <Route exact path="/" component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default AppContent;
