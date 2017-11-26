import React from "react";
import PropTypes from "prop-types";
import { Platform, View, Text, SectionList } from "react-native";
import { addFave } from "../../config/models";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";
import styles from "./styles";
import { colors } from "../../config/styles";
import { getFaves } from "../../config/models";

const SessionSchedules = ({ sessions }) => {
  const isFaved = id => {
    const session = getFaves() ? getFaves().filtered("id == $0", id) : 0;

    if (session.length) {
      return true;
    }
    return false;
  };

  return sessions !== undefined ? (
    <View>
      <SectionList
        ItemSeparatorComponent={() => <View style={styles.sessionSeparator} />}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.sectionTitle}>{item.title}</Text>
              <View style={styles.container}>
                <Text style={styles.sectionLocation}>{item.location}</Text>
                <Text
                  style={styles.faveIcon}
                  onPress={() => addFave(item.session_id)}
                >
                  {isFaved(item.session_id) && (
                    <Icon
                      name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
                      size={15}
                      color={colors.red}
                    />
                  )}
                </Text>
              </View>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => {
          return (
            <Text style={styles.sectionHeader}>
              {moment.unix(section.title).format("h:mm A")}
            </Text>
          );
        }}
        sections={sessions}
        keyExtractor={item => item.session_id}
      />
    </View>
  ) : null;
};

SessionSchedules.propTypes = {
  sessions: PropTypes.array
};

export default SessionSchedules;
