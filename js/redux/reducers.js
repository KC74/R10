import { combineReducers } from "redux";
import { NavigationReducer } from "@expo/ex-navigation";

const rootReducers = combineReducers({
  navigation: NavigationReducer
  // other reducers
});

export default rootReducers;
