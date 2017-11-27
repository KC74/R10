import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 15,
    height: "100%"
  },
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5
  },
  headerContainer: {
    height: 100
  },
  headerWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  headerTitle: {
    color: "white",
    width: "100%",
    fontSize: 20,
    textAlign: "center",
    fontFamily: typography.fontMainReg
  },
  speakerImage: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  speakerName: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 32,
    fontFamily: typography.fontMainReg
  },
  speakerBio: {
    fontFamily: typography.fontMainLight,
    fontSize: 16,
    lineHeight: 24
  },
  buttonContainer: {
    marginTop: 20
  },
  readMoreButton: {
    width: "75%",
    padding: 15,
    borderRadius: 50
  },
  readMoreButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontFamily: typography.fontMainReg
  }
});

export default styles;
