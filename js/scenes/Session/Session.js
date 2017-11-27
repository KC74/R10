import React from "react";
import PropTypes from "prop-types";
import { ScrollView, View, Text, Platform, Button } from "react-native";
import { isFaved, removeFave, addFave } from "../../config/models";
import { colors } from "../../config/styles";
import { FaveButton } from "../../components/FaveButton";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";
import styles from "./styles";

const Session = ({ session }) => {
  const faved = isFaved(session.session_id);

  return (
    <ScrollView>
      <View>
        <Text>{session.location}</Text>
        <Text style={styles.faveIcon}>
          {faved && (
            <Icon
              name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
              size={15}
              color={colors.red}
            />
          )}
        </Text>
      </View>
      <Text>{session.title}</Text>
      <Text> {moment.unix(session.start_time).format("h:mm A")}</Text>
      <Text>{session.description}</Text>
      <Text>Presented by:</Text>
      <View>
        <Text>Avatar</Text>
        <Text>{session.speaker}</Text>
      </View>
      <FaveButton
        handleFave={
          faved
            ? () => removeFave(session.session_id)
            : () => addFave(session.session_id)
        }
        sessionID={session.session_id}
      >
        {faved ? "Remove from Faves" : "Add to Faves"}
      </FaveButton>
    </ScrollView>
  );
};

Session.propTypes = {
  session: PropTypes.object
};

export default Session;
