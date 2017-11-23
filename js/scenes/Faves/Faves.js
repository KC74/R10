import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import realm, { getFaves, addFave, removeFave } from "../../config/models";

const Faves = props => {
  addFave("UUID123");
  // removeFave("UUID123");
  getFaves();
  return <Text>This is Faves</Text>;
};

Faves.propTypes = {};

export default Faves;
