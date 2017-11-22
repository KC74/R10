import React from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList } from "react-native";

const SessionSchedules = ({ sessions }) => {
  return sessions ? (
    <View>
      <SectionList
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => {
          console.log(section);
          return <Text>{section.title}</Text>;
        }}
        sections={sessions}
        keyExtractor={item => item.title}
      />
    </View>
  ) : (
    <Text>Loading..</Text>
  );
};

SessionSchedules.propTypes = {
  sessions: PropTypes.array
};

export default SessionSchedules;
