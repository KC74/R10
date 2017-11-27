import React from "react";
import PropTypes from "prop-types";
import {
  ScrollView,
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { isFaved, removeFave, addFave } from "../../config/models";
import { colors } from "../../config/styles";
import { FaveButton } from "../../components/FaveButton";
import { goToSpeaker } from "../../lib/navigationHelpers";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";
import styles from "./styles";

const Session = ({ session, speakerData }) => {
  const faved = isFaved(session.session_id);

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.wrapper}>
        <Text style={styles.sectionLocation}>{session.location}</Text>
        <Text style={styles.faveIcon}>
          {faved && (
            <Icon
              name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
              size={24}
              color={colors.red}
            />
          )}
        </Text>
      </View>
      <Text style={styles.sectionTitle}>{session.title}</Text>
      <Text style={styles.sectionTime}>
        {moment.unix(session.start_time).format("h:mm A")}
      </Text>
      <Text style={styles.sectionDescription}>{session.description}</Text>
      {speakerData !== undefined ? (
        <View>
          <Text style={styles.sectionSpeaker}>Presented by:</Text>
          <View style={styles.speakerWrapper}>
            <Image
              source={{ uri: speakerData.image }}
              style={styles.speakerAvatar}
            />
            <TouchableOpacity onPress={() => goToSpeaker(speakerData)}>
              <Text style={styles.speakerName}>{speakerData.name}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sessionSeparator} />
          <View style={styles.buttonContainer}>
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
          </View>
        </View>
      ) : (
        <Text style={styles.sectionDescription}>
          There are no speakers for this session.
        </Text>
      )}
    </ScrollView>
  );
};

Session.propTypes = {
  session: PropTypes.object,
  speakerData: PropTypes.object
};

export default Session;
