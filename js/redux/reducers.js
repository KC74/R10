import { combineReducers } from "redux";
import { NavigationReducer } from "@expo/ex-navigation";
import conductReducer from "./modules/conduct";
import sessionSchedulesReducer from "./modules/sessions";

const rootReducers = combineReducers({
  navigation: NavigationReducer,
  conducts: conductReducer,
  sessionSchedules: sessionSchedulesReducer
  // other reducers
});

export default rootReducers;
