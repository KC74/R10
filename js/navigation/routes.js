import { createRouter } from "@expo/ex-navigation";
import About from "../scenes/About";
import Schedule from "../scenes/Schedule";
import Map from "../scenes/Map";
import Faves from "../scenes/Faves";
import Session from "../scenes/Session";
import Speaker from "../scenes/Speaker";
import Layout from "./NavigationLayout";

const Router = createRouter(() => ({
  layout: () => Layout,
  about: () => About,
  schedule: () => Schedule,
  faves: () => Faves,
  session: () => Session,
  speaker: () => Speaker,
  map: () => Map
}));

export default Router;
