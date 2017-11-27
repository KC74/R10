import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ActivityIndicator } from "react-native";
import Faves from "./Faves";
import { connect } from "react-redux";
import { getSessionSchedules } from "../../redux/modules/sessions";
import { getFaves as getFavesData } from "../../redux/modules/faves";
import { formatSessionData } from "../../redux/resources/jsonHelpers";

class FavesContainer extends Component {
  static route = {
    navigationBar: {
      title: "Faves"
    }
  };

  componentDidMount() {
    this.props.dispatch(getSessionSchedules());
    this.props.dispatch(getFavesData());
  }

  _filterFaves(sessions) {
    const { faves } = this.props;
    if (faves) {
      const filteredSessions = sessions.filter(session => {
        return faves.find(fave => {
          return session.session_id === fave.id && session;
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
          <Faves sessions={this._filterFaves(sessionSchedulesData)} />
        )}
      </View>
    );
  }
}

FavesContainer.propTypes = {
  sessionSchedulesData: PropTypes.array,
  isLoading: PropTypes.bool,
  faves: PropTypes.object
};

function mapStateToProps(state) {
  return {
    sessionSchedulesData: state.sessionSchedules.sessionSchedulesData,
    isLoading: state.sessionSchedules.isLoading,
    faves: state.faves.favesData
  };
}

export default connect(mapStateToProps)(FavesContainer);
