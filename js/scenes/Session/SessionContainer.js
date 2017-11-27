import React, { Component } from "react";
import PropTypes from "prop-types";
import Session from "./Session";
import { View } from "react-native";

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: "Session"
    }
  };
  render() {
    console.log(this.props);
    return (
      <View>
        <Session />
      </View>
    );
  }
}

SessionContainer.propTypes = {};

export default SessionContainer;
