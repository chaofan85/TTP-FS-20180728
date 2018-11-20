import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/session_actions.js";
import SessionForm from "./session/session_form";
// import HeaderContainer from './header_container';

class Home extends React.Component {
  render() {
    if (this.props.currentUser) {
      return (
        <div className="main">
          <HeaderContainer />
          <PhotoIndex />
        </div>
      );
    } else {
      return (
        <div className="index-main">
          <SessionForm />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.session.currentUser
  };
}

export default connect(
  mapStateToProps,
  null
)(Home);
