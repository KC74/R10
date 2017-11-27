import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import SessionSchedules from "../../components/SessionSchedules";

const Schedule = ({ sessions }) => {
  return (
    <View>
      {sessions.length > 0 ? (
        <SessionSchedules sessions={sessions} currentNavigatorUID="schedule" />
      ) : (
        <Text>There are currently no sessions.</Text>
      )}
    </View>
  );
};

Schedule.propTypes = {
  sessions: PropTypes.array
};

export default Schedule;
