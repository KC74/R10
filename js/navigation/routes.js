import { createRouter } from "@expo/ex-navigation";
import About from "../scenes/About";
import Schedule from "../scenes/Schedule";
import Map from "../scenes/Map";
import Faves from "../scenes/Faves";
import Layout from "./NavigationLayout";

const Router = createRouter(() => ({
  layout: () => Layout,
  about: () => About,
  schedule: () => Schedule,
  faves: () => Faves,
  map: () => Map
}));

export default Router;
