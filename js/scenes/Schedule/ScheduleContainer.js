import React, { Component } from "react";
import PropTypes from "prop-types";
import Schedule from "./Schedule";
import { connect } from "react-redux";
import { getSessionSchedules } from "../../redux/modules/sessions";

class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  componentDidMount() {
    this.props.dispatch(getSessionSchedules());
    // fetch data
    // put data through to get formatted
    // formatSessionData();
  }
  render() {
    return <Schedule data="Hello" />;
  }
}

ScheduleContainer.propTypes = {};

export default connect(store => store.sessionSchedules)(ScheduleContainer);
