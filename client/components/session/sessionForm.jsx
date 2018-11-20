import React from "react";
import SignupForm from "./signupForm";
import LoginForm from "./loginForm";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderLogin: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ renderLogin: !this.state.renderLogin });
  }

  render() {
    if (this.state.renderLogin) {
      return (
        <div className="index-form">
          <div className="login-container">
            <h2>Stockers</h2>
            <LoginForm />
          </div>
          <div className="signup-link">
            <p>
              Dont't have an account? &nbsp;
              <a onClick={this.handleChange}>Sign up</a>
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <section className="index-form">
          <div className="signup-container">
            <h2>Stocker</h2>
            <p className="slogan">something</p>
            <SignupForm />
          </div>
          <div className="login-link">
            <p>
              Have an account? &nbsp;
              <a onClick={this.handleChange}>Log in</a>
            </p>
          </div>
        </section>
      );
    }
  }
}

export default SessionForm;
