import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";
import Router from "../navigation/routes";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { titleBar, colors } from "../config/styles";

class NavigationLayout extends Component {
  defaultRouteConfig = {
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
      <DrawerNavigation id="main" initialItem="schedule" drawerWidth={200}>
        <DrawerNavigationItem
          id="schedule"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("Schedule", isSelected)}
          renderIcon={isSelected => this.renderIcon("ios-calendar", isSelected)}
        >
          <StackNavigation
            id="schedule"
            initialRoute={Router.getRoute("schedule")}
            defaultRouteConfig={this.defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="faves"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("Faves", isSelected)}
          renderIcon={isSelected => this.renderIcon("ios-heart", isSelected)}
        >
          <StackNavigation
            id="faves"
            initialRoute={Router.getRoute("faves")}
            defaultRouteConfig={this.defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="map"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("Map", isSelected)}
          renderIcon={isSelected => this.renderIcon("ios-map", isSelected)}
        >
          <StackNavigation
            id="map"
            initialRoute={Router.getRoute("map")}
            defaultRouteConfig={this.defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="about"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("About", isSelected)}
          renderIcon={isSelected =>
            this.renderIcon("ios-information-circle", isSelected)
          }
        >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute("about")}
            defaultRouteConfig={this.defaultRouteConfig}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }

  renderIcon(icon, isSelected) {
    return (
      <Icon
        name={icon}
        size={30}
        color={isSelected ? colors.purple : colors.medGrey}
      />
    );
  }

  _renderTitle(text, isSelected) {
    return (
      <Text
        style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}
      >
        {text}
      </Text>
    );
  }
}

export default NavigationLayout;
