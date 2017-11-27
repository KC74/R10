import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "../navigation/routes";

export const goToSession = (currentNavigatorUID, item) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute("session", { item })
    )
  );
};

export const closeSpeaker = () => {
  Store.dispatch(NavigationActions.pop("root"));
};
