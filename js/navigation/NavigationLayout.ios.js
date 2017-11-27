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
import LinearGradient from "react-native-linear-gradient";
import { titleBar, colors } from "../config/styles";

class NavigationLayout extends Component {
  route = {
    navigationBar: {
      titleStyle: titleBar.titleStyle,
      renderBackground: function() {
        return (
          <LinearGradient
            colors={[colors.red, colors.purple]}
            style={titleBar.linearGradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          />
        );
      }
    }
  };

  render() {
    return (
      <TabNavigation
        tabBarColor="black"
        id="main"
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
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
            defaultRouteConfig={this.route}
          />
        </TabItem>

        <TabItem
          id="map"
          title="Map"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon("ios-map", isSelected)}
        >
          <StackNavigation
            id="map"
            navigatorUID="map"
            initialRoute={Router.getRoute("map")}
            defaultRouteConfig={this.route}
          />
        </TabItem>
        <TabItem
          id="faves"
          title="Faves"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon("ios-heart", isSelected)}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute("faves")}
            defaultRouteConfig={this.route}
          />
        </TabItem>
        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon("ios-information-circle", isSelected)
          }
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
            defaultRouteConfig={this.route}
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
