import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import SessionSchedules from "../../components/SessionSchedules";

const Schedule = ({ data }) => {
  return (
    <View>
      <SessionSchedules data={data} />
    </View>
  );
};

Schedule.propTypes = {};

export default Schedule;
