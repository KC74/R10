import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import SessionSchedules from "../../components/SessionSchedules";

const Schedule = ({ sessions }) => {
  return (
    <View>
      <SessionSchedules sessions={sessions} />
    </View>
  );
};

Schedule.propTypes = {
  sessions: PropTypes.array
};

export default Schedule;
