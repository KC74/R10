import React from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList } from "react-native";

const SessionSchedules = ({ data }) => {
  return (
    <View>
      <SectionList
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
        sections={[
          // homogenous rendering between sections
          { data: ["a"], title: "title: a" },
          { data: ["b"], title: "title: b" },
          { data: ["c"], title: "title: c" },
          { data: ["a"], title: "title: a" },
          { data: ["b"], title: "title: b" },
          { data: ["c"], title: "title: c" },
          { data: ["a"], title: "title: a" },
          { data: ["b"], title: "title: b" },
          { data: ["c"], title: "title: c" },
          { data: ["a"], title: "title: a" }
        ]}
      />
    </View>
  );
};

SessionSchedules.propTypes = {};

export default SessionSchedules;
