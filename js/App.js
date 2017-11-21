/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import About from "./scenes/About/";
import {
  NavigationProvider,
  NavigationContext,
  StackNavigation
} from "@expo/ex-navigation";
import Router from "./navigation/routes";
import Store from "./redux/store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    const navigationContext = new NavigationContext({
      router: Router,
      store: Store
    });

    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation initialRoute={Router.getRoute("about")} />
        </NavigationProvider>
      </Provider>
    );
  }
}

export default App;
