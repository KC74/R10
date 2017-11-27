import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  sectionTitle: {
    marginTop: 15,
    fontSize: 32,
    fontFamily: typography.fontMainReg
  },
  sectionLocation: {
    marginTop: 10,
    fontFamily: typography.fontMainReg,
    fontSize: 20,
    color: colors.medGrey
  },
  sectionSpeaker: {
    marginTop: 40,
    fontFamily: typography.fontMainReg,
    fontSize: 20,
    color: colors.medGrey
  },
  sectionTime: {
    marginTop: 15,
    fontFamily: typography.fontMainReg,
    fontSize: 20,
    color: colors.red
  },
  sectionDescription: {
    marginTop: 15,
    fontFamily: typography.fontMainLight,
    fontSize: 20
  },
  sectionHeader: {
    backgroundColor: colors.lightGrey,
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: typography.fontMainReg
  },
  faveIcon: {
    alignSelf: "center"
  },
  speakerAvatar: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    marginRight: 15
  },
  speakerName: {
    fontSize: 20,
    fontFamily: typography.fontMainReg
  },
  speakerWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15
  },
  sessionSeparator: {
    marginTop: 20,
    marginBottom: 20,
    height: 1,
    backgroundColor: colors.medGrey,
    flex: 1
  }
});

export default styles;
