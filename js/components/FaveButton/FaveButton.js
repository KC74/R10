import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

const FaveButton = ({ sessionID, handleFave, children }) => {
  return (
    <TouchableOpacity onPress={() => handleFave(sessionID)}>
      <View style={styles.faveButton}>
        <Text style={styles.faveButtonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

FaveButton.propTypes = {
  children: PropTypes.string,
  handleFave: PropTypes.func,
  sessionID: PropTypes.string
};

export default FaveButton;
