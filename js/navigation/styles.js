import { StyleSheet } from "react-native";
import { colors } from "../config/styles";

const styles = StyleSheet.create({
  // styles here
  tabMenu: {
    backgroundColor: "#fff"
  },
  selectedTabTitle: {
    color: "white"
  },
  unselectedTabTitle: {
    color: "#999"
  },
  selectedItemStyle: {
    backgroundColor: colors.lightGrey
  },

  titleText: {
    color: colors.medGrey,
    marginLeft: 15
  },

  selectedTitleText: {
    color: colors.purple
  }
});

export default styles;
