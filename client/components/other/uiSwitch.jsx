import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./other.css";

class UiSwitch extends Component {
  render() {
    return (
      <div className="switch">
        <Link to={"/"}>
          <button>Portfolio</button>
        </Link>
        <Link to={"/history"}>
          <button>History</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps
  };
};

export default connect(
  mapStateToProps,
  null
)(UiSwitch);
