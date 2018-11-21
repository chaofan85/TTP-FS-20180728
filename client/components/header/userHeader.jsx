import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/sessionActions.js";
import "./header.css";

class UserHeader extends Component {
  constructor(props) {
    super(props);
    this.userLogout = this.userLogout.bind(this);
  }

  userLogout() {
    this.props.logout();
  }

  render() {
    console.log(this.props);
    return this.props.currentUser ? (
      <div className="user-panel">
        <div className="welcome">
          Welcome, {this.props.currentUser.username}
        </div>
        <button onClick={this.userLogout}>Log Out</button>
      </div>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.session.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHeader);
