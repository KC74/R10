import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Speaker from "./Speaker";
import LinearGradient from "react-native-linear-gradient";
import { titleBar, colors } from "../../config/styles";

class SpeakerContainer extends Component {
  render() {
    const { currentSpeaker } = this.props;
    return <Speaker speakerData={currentSpeaker} />;
  }
}

SpeakerContainer.propTypes = {
  currentSpeaker: PropTypes.object
};

export default SpeakerContainer;
