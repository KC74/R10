import React from "react";
import PropTypes from "prop-types";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight,
  Platform,
  StatusBar,
  Linking
} from "react-native";
import { closeSpeaker } from "../../lib/navigationHelpers";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import { colors } from "../../config/styles";

const Speaker = ({ speakerData }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <View style={styles.headerWrapper}>
          <TouchableHighlight onPress={() => closeSpeaker()}>
            <Icon
              name={Platform.OS === "ios" ? "ios-close" : "md-close"}
              size={40}
              color="white"
            />
          </TouchableHighlight>
          <Text style={styles.headerTitle}>About the Speaker</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.bodyContainer}>
          <Image
            source={{ uri: speakerData.image }}
            style={styles.speakerImage}
          />
          <Text style={styles.speakerName}>{speakerData.name}</Text>
          <Text style={styles.speakerBio}>{speakerData.bio}</Text>
          <View style={styles.buttonContainer}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0, 1]}
              colors={[colors.purple, colors.blue]}
              style={styles.readMoreButton}
            >
              <TouchableHighlight
                underlayColor={"rgba(0,0,0,0)"}
                onPress={() => Linking.openURL(`${speakerData.url}`)}
              >
                <Text style={styles.readMoreButtonText}>
                  Read More on Wikipedia
                </Text>
              </TouchableHighlight>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  speakerData: PropTypes.object
};

export default Speaker;
