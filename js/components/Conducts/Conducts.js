import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  LayoutAnimation,
  TouchableOpacity,
  Platform,
  UIManager,
  View,
  Text
  // ...other imports
} from "react-native";
import styles from "./styles";

const config = LayoutAnimation.create(100, "linear", "opacity");
class Conducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  toggle = () => {
    this.setState({ showText: !this.state.showText });
    this.animate();
  };

  animate = () => {
    LayoutAnimation.configureNext(config);
  };
  render() {
    const { subHeadings, itemContent } = styles;
    const { title, description } = this.props;
    return (
      <View>
        <Text onPress={() => this.toggle()} style={subHeadings}>
          + {title}
        </Text>
        <TouchableOpacity>
          {this.state.showText && (
            <Text style={itemContent}>{description}</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

Conducts.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Conducts;
