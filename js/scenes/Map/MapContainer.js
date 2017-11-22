import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Map from "./Map";

class MapContainer extends Component {
  render() {
    return (
      <View>
        <Map />
      </View>
    );
  }
}

MapContainer.propTypes = {};

export default MapContainer;
