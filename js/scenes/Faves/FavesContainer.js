import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Faves from "./Faves";

class FavesContainer extends Component {
  render() {
    return (
      <View>
        <Faves />
      </View>
    );
  }
}

FavesContainer.propTypes = {};

export default FavesContainer;
