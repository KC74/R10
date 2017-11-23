import React from "react";
import PropTypes from "prop-types";
import { Platform, View, Text, SectionList } from "react-native";
import { addFave } from "../../config/models";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";

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
                <Icon
                  name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
                  size={15}
                  color="red"
                />
              </Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => {
          return <Text>{moment.unix(section.title).format("h:mm A")}</Text>;
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
