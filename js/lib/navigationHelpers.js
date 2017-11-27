import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "../navigation/routes";

export const goToSession = (currentNavigatorUID, currentSession) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute("session", { currentSession })
    )
  );
};

export const goToSpeaker = currentSpeaker => {
  Store.dispatch(
    NavigationActions.push(
      "root",
      Router.getRoute("speaker", { currentSpeaker })
    )
  );
};

export const closeSpeaker = () => {
  Store.dispatch(NavigationActions.pop("root"));
};
