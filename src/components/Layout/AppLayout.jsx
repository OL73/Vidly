import React, { Fragment, Component } from "react";
import NavBar from "../NavBar";
import AppContent from "./AppContent";

class AppLayout extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <AppContent />
      </Fragment>
    );
  }
}

export default AppLayout;
