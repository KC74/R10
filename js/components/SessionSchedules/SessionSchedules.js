import React from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList } from "react-native";
import { addFave } from "../../config/models";
import Icon from "react-native-vector-icons/Ionicons";

const SessionSchedules = ({ sessions }) => {
  return (
    <View>
      <SectionList
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
              <Text onPress={() => addFave(item.session_id)}>
                <Icon name={"ios-heart"} size={30} color="red" />
              </Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => {
          return <Text>{section.title}</Text>;
        }}
        sections={sessions}
        keyExtractor={item => item.session_id}
      />
    </View>
  );
};

SessionSchedules.propTypes = {
  sessions: PropTypes.array
};

export default SessionSchedules;
