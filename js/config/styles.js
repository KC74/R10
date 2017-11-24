import { Platform } from "react-native";

export const colors = {
  medGrey: "#999",
  red: "#cf392a",
  purple: "#9963ea",
  blue: "#8797D6",
  lightGrey: "#e6e6e6"
};

export const typography = {
  ...Platform.select({
    ios: {
      fontMainReg: "Montserrat"
    },
    android: {
      fontMainReg: "Montserrat-Regular"
    }
  }),
  fontMainLight: "Montserrat-Light"
};

export const titleBar = {
  linearGradient: {
    flex: 1,
    height: "100%",
    width: "100%"
  },
  titleStyle: {
    color: "white"
  }
};
