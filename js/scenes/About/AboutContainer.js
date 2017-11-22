import React, { Component } from "react";
import { Text, ActivityIndicator, View } from "react-native";
import { StackNavigation } from "@expo/ex-navigation";
import { connect } from "react-redux";
import { getConducts } from "../../redux/modules/conduct";
import Router from "../../navigation/routes";
import About from "./About";

class AboutContainer extends Component {
  static route = {
    navigationBar: {
      title: "About"
    }
  };

  componentDidMount() {
    this.props.dispatch(getConducts());
  }

  render() {
    const { isLoading, conductsData } = this.props;
    return (
      <View style={{ flex: 1, width: "100%" }}>
        {isLoading ? (
          <View style={{ marginTop: "50%" }}>
            <ActivityIndicator size="large" color="skyblue" animating={true} />
          </View>
        ) : (
          <About data={conductsData} />
        )}
      </View>
    );
  }
}

export default connect(store => store.conducts)(AboutContainer);
