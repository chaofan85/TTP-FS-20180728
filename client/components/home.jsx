import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/sessionActions.js";
import SessionForm from "./session/sessionForm";
// import HeaderContainer from './header_container';

class Home extends React.Component {
  render() {
    // console.log(this.props.currentUser);
    if (this.props.currentUser) {
      return (
        <div className="main">
          <div>hello</div>
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
  // console.log(state.session);
  return {
    currentUser: state.session.currentUser
  };
}

export default connect(
  mapStateToProps,
  null
)(Home);
