import { StyleSheet } from "react-native";
import { typography } from "../../config/styles";

const styles = StyleSheet.create({
  // styles here
  marginSpaceTopBtmLarge: {
    marginBottom: 20,
    marginTop: 20
  },
  paddingTopBtmLarge: {
    paddingTop: 15,
    paddingBottom: 15
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1
  },
  container: {
    marginLeft: 10,
    marginRight: 10
  },
  headers: {
    fontSize: 24,
    fontFamily: typography.fontMainReg
  },
  subHeadings: {
    color: "#9963ea",
    marginBottom: 20,
    fontFamily: typography.fontMainReg
  },
  itemContent: {
    marginBottom: 20,
    fontFamily: typography.fontMainLight
  }
});

export default styles;
