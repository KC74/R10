import React, { Component } from "react";
import PropTypes from "prop-types";
import Schedule from "./Schedule";
import { connect } from "react-redux";
import { getSessionSchedules } from "../../redux/modules/sessions";
import { View, ActivityIndicator } from "react-native";

class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  componentDidMount() {
    this.props.dispatch(getSessionSchedules());
  }

  render() {
    const { sessionSchedulesData, isLoading } = this.props;
    return (
      <View style={{ flex: 1, width: "100%" }}>
        {isLoading ? (
          <View style={{ marginTop: "50%" }}>
            <ActivityIndicator size="large" color="skyblue" animating={true} />
          </View>
        ) : (
          <Schedule sessions={sessionSchedulesData} />
        )}
      </View>
    );
  }
}

ScheduleContainer.propTypes = {
  sessionSchedulesData: PropTypes.array,
  isLoading: PropTypes.bool
};

export default connect(store => store.sessionSchedules)(ScheduleContainer);
