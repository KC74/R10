import { StyleSheet } from "react-native";
import { colors } from "../../config/styles";

const styles = StyleSheet.create({
  faveButton: {
    width: "50%",
    backgroundColor: colors.purple,
    borderRadius: 25,
    borderWidth: 10,
    borderColor: colors.purple
  },
  faveButtonText: {
    color: "white",
    textAlign: "center"
  }
});

export default styles;
