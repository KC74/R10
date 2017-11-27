import React, { Component } from "react";
import PropTypes from "prop-types";
import Session from "./Session";
import { View } from "react-native";
import { connect } from "react-redux";
import { getFaves } from "../../redux/modules/faves";
import realm from "../../config/models";

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: "Session"
    }
  };

  componentDidMount() {
    realm.addListener("change", this._updateFaves);
    this.props.dispatch(getFaves());
  }

  componentWillUnmount() {
    realm.removeListener("change", this._updateFaves);
  }

  _updateFaves = () => {
    this.props.dispatch(getFaves());
  };
  render() {
    const { currentSession } = this.props;
    return (
      <View>
        <Session session={currentSession} />
      </View>
    );
  }
}

SessionContainer.propTypes = {
  currentSession: PropTypes.object
};

function mapStateToProps(state) {
  return {
    isLoading: state.sessionSchedules.isLoading,
    faves: state.faves.favesData
  };
}

export default connect(mapStateToProps)(SessionContainer);
