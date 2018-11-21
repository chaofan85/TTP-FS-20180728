import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/sessionActions.js";
import UserHeader from "./userHeader";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">$tocker</div>
        <UserHeader />
      </header>
    );
  }
}

export default Header;
