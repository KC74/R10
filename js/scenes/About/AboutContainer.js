import React, { Component } from "react";
import { Text, ActivityIndicator } from "react-native";
import About from "./About";

class AboutContainer extends Component {
  state = {
    isLoading: true
  };

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
      <About data={data} />
    );
  }
}

export default AboutContainer;
