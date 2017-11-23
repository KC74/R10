import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import realm, {
  deleteAllFaves,
  getFaves,
  addFave,
  removeFave
} from "../../config/models";

const Faves = props => {
  addFave("UUID123");
  addFave("UUID124");
  addFave("UUID125");
  addFave("UUID126");
  // removeFave("UUID123");
  getFaves();
  deleteAllFaves();
  return <Text>This is Faves</Text>;
};

Faves.propTypes = {};

export default Faves;
