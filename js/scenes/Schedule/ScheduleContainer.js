import React, { Component } from "react";
import PropTypes from "prop-types";
import Schedule from "./Schedule";

class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };
  render() {
    return <Schedule />;
  }
}

ScheduleContainer.propTypes = {};

export default ScheduleContainer;
