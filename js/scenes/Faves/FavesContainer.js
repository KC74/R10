import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ActivityIndicator } from "react-native";
import Faves from "./Faves";
import { connect } from "react-redux";
import realm, { getFaves } from "../../config/models";
import { getSessionSchedules } from "../../redux/modules/sessions";
import { formatSessionData } from "../../redux/resources/jsonHelpers";

class FavesContainer extends Component {
  static route = {
    navigationBar: {
      title: "Faves"
    }
  };

  componentDidMount() {
    this.props.dispatch(getSessionSchedules());
  }

  filterFaves(sessions) {
    if (getFaves()) {
      const filteredSessions = sessions.filter(session => {
        return getFaves().find(fave => {
          if (session.session_id === fave.id) {
            return session;
          }
        });
      });
      return formatSessionData(filteredSessions);
    } else {
      return [];
    }
  }

  render() {
    const { sessionSchedulesData, isLoading } = this.props;

    return (
      <View style={{ flex: 1, width: "100%" }}>
        {isLoading ? (
          <View style={{ marginTop: "50%" }}>
            <ActivityIndicator size="large" color="skyblue" animating={true} />
          </View>
        ) : (
          <Faves sessions={this.filterFaves(sessionSchedulesData)} />
        )}
      </View>
    );
  }
}

FavesContainer.propTypes = {
  sessionSchedulesData: PropTypes.array,
  isLoading: PropTypes.bool
};

export default connect(store => store.sessionSchedules)(FavesContainer);
