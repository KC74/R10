import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import SessionSchedules from "../../components/SessionSchedules";
const Faves = ({ sessions }) => {
  // console.log(sessions);
  return (
    <View>
      {sessions.length > 0 ? (
        <SessionSchedules sessions={sessions} />
      ) : (
        <Text>You have no favorites yet!</Text>
      )}
    </View>
  );
};

Faves.propTypes = {
  sessions: PropTypes.array
};

export default Faves;
