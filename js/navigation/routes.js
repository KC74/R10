import { createRouter } from "@expo/ex-navigation";
import About from "../scenes/About";
import Schedule from "../scenes/Schedule";

const Router = createRouter(() => ({
  about: () => About,
  schedule: () => Schedule
}));

export default Router;
