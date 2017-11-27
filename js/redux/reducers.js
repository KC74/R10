import { combineReducers } from "redux";
import { NavigationReducer } from "@expo/ex-navigation";
import conductReducer from "./modules/conduct";
import sessionSchedulesReducer from "./modules/sessions";
import favesReducer from "./modules/faves";
import speakerReducer from "./modules/speakers";

const rootReducers = combineReducers({
  navigation: NavigationReducer,
  conducts: conductReducer,
  sessionSchedules: sessionSchedulesReducer,
  faves: favesReducer,
  speaker: speakerReducer
  // other reducers
});

export default rootReducers;
