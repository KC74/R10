import React, { Component } from "react";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Router from "../navigation/routes";
import styles from "./styles";

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    return (
      <TabNavigation
        id="main"
        tabBarColor="black"
        navigatorUID="main"
        initialTab="schedule"
      >
        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon("ios-calendar", isSelected)}
        >
          <StackNavigation
            id="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </TabItem>
        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon("ios-information-circle", isSelected)}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>
      </TabNavigation>
    );
  }

  renderIcon(icon, isSelected) {
    return (
      <Icon name={icon} size={30} color={isSelected ? "white" : "#999999"} />
    );
  }

  renderTitle(isSelected, title) {
    return (
      <Text
        style={isSelected ? styles.selectedTabTitle : styles.unselectedTabTitle}
      >
        {title}
      </Text>
    );
  }
}

export default NavigationLayout;
