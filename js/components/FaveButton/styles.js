import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

const styles = StyleSheet.create({
  faveButton: {
    width: "50%",
    backgroundColor: colors.purple,
    borderRadius: 30,
    borderWidth: 15,
    borderColor: colors.purple
  },
  faveButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,

    fontFamily: typography.fontMainReg
  }
});

export default styles;
