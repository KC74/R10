import React from "react";
import { Text, ScrollView, FlatList, View, Image } from "react-native";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import styles from "./styles";
import { typography } from "../../config/styles";

const About = ({ data }) => {
  let key = 0;
  const {
    container,
    logoContainer,
    headers,
    subHeadings,
    itemContent,
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
          <View key={key++}>
            <Text style={subHeadings}>+ {item.title}</Text>
            <Text style={itemContent}>{item.description}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

About.propTypes = {
  data: PropTypes.array
};

export default About;
