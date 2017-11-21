import React, { Component } from "react";
import { Text, ActivityIndicator, View } from "react-native";
import { StackNavigation } from "@expo/ex-navigation";
import Router from "../../navigation/routes";
import About from "./About";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this._goBack = this._goBack.bind(this);
    this.state = {
      isLoading: true
    };
  }

  static route = {
    navigationBar: {
      title: "About"
    }
  };

  _goBack() {
    this.props.navigator.pop();
  }

  componentDidMount() {
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(res => res.json())
      .then(data => this.setState({ data, isLoading: false }))
      .catch(e => console.log(e));
  }

  render() {
    const { isLoading, data } = this.state;
    return isLoading ? (
      <ActivityIndicator size="large" color="skyblue" animating={true} />
    ) : (
      <View>
        <Text onPress={this._goBack}>X</Text>
        <About data={data} />
      </View>
    );
  }
}

export default AboutContainer;
