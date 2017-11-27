import { createRouter } from "@expo/ex-navigation";
import About from "../scenes/About";
import Schedule from "../scenes/Schedule";
import Map from "../scenes/Map";
import Faves from "../scenes/Faves";
import Session from "../scenes/Session";
import Layout from "./NavigationLayout";

const Router = createRouter(() => ({
  layout: () => Layout,
  about: () => About,
  schedule: () => Schedule,
  faves: () => Faves,
  session: () => Session,
  map: () => Map
}));

export default Router;
