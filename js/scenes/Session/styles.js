import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  sectionTitle: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: typography.fontMainReg
  },
  sectionLocation: {
    marginLeft: 10,
    marginBottom: 10,
    fontFamily: typography.fontMainReg,
    fontSize: 12,
    color: colors.medGrey
  },
  sectionHeader: {
    backgroundColor: colors.lightGrey,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    fontFamily: typography.fontMainReg
  },
  faveIcon: {
    marginRight: 10
  },
  sessionSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.medGrey,
    flex: 1
  }
});

export default styles;
