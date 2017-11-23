import { createRouter } from "@expo/ex-navigation";
import About from "../scenes/About";
import Schedule from "../scenes/Schedule";
import Map from "../scenes/Map";
import Faves from "../scenes/Faves";
import LayoutIOS from "./NavigationLayout";
import LayoutAndroid from "./NavigationLayout.android";
import { Platform } from "react-native";

const Router = createRouter(() => ({
  layout: () => {
    return Platform.OS === "ios" ? LayoutIOS : LayoutAndroid;
  },
  about: () => About,
  schedule: () => Schedule,
  map: () => Map,
  faves: () => Faves
}));

export default Router;
