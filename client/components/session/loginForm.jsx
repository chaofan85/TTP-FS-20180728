import React from "react";
import { connect } from "react-redux";
import ErrorItem from "../other/errorItem.jsx";
import { login, clearErrors } from "../../actions/sessionActions.js";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.userInfo;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    const errors = this.props.errors.map((error, idx) => {
      return <ErrorItem error={error} key={idx} />;
    });

    return (
      <div className="login-form">
        <div className="session-errors">{errors}</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange("email")}
          />
          <br />
          <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange("password")}
          />
          <br />
          <button className="login-button">Log In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const userInfo = {
    email: "",
    password: ""
  };

  return {
    userInfo,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
