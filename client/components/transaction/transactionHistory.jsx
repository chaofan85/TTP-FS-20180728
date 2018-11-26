import React, { Component } from "react";
import UiSwitch from "../other/uiSwitch";
import { connect } from "react-redux";
import "./transaction.css";

class TransactionHistory extends Component {
  render() {
    console.log(this.props.currentUser);
    return (
      <div className="history-main">
        <UiSwitch />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(
  mapStateToProps,
  null
)(TransactionHistory);
