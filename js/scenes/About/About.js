import React from "react";
import { Text, ScrollView, View } from "react-native";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import styles from "./styles";
import Conducts from "../../components/Conducts";

// const animationConfig = {
//   duration: 1000,
//   update: {
//     type: "spring",
//     springDamping: 0.1 // lower == more dramatic spring
//   }
// };

const About = ({ data }) => {
  let key = 0;
  const {
    container,
    logoContainer,
    headers,
    paddingTopBtmLarge,
    marginSpaceTopBtmLarge
  } = styles;

  return (
    <ScrollView style={container}>
      <View style={[logoContainer, paddingTopBtmLarge]}>
        <Logo />
      </View>
      <Text>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={[headers, marginSpaceTopBtmLarge]}>Date & Venue</Text>
      <Text>
        The R10 conference will take place on Tuesday, June 27, 2017 in
        Vancouver, BC.
      </Text>
      <Text style={[headers, marginSpaceTopBtmLarge]}>Code of Conduct</Text>
      {data.map(item => {
        return (
          <Conducts
            key={key++}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </ScrollView>
  );
};

About.propTypes = {
  data: PropTypes.array
};

export default About;
