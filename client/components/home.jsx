import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/sessionActions.js";
import SessionForm from "./session/sessionForm";
import Portfolio from "./portfolio/portfolio";

class Home extends React.Component {
  componentDidMount() {
    $.ajax({
      url: "https://api.iextrading.com/1.0/tops?symbols=SNAP,fb",
      dataType: "jsonp",

      success: function(response) {
        console.log(response); // server response
      }
    });
  }
  render() {
    if (this.props.currentUser) {
      return (
        <div className="main">
          <Portfolio />
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
