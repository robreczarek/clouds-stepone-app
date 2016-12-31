import React, { Component } from 'react';
import './Login.css';
import { hashHistory, browserHistory, Router, Route, Link, withRouter } from 'react-router'

class Login extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    localStorage.email = event.target.email;
    this.props.router.replace('/list');
  }

  render() {
    return (
        <div className="loginBox">
          <h3 className="section-header">
            Login
          </h3>

          <form className="frmlogin" onSubmit={this.handleSubmit}>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <input type="submit" value="Log in" />
          </form>
        </div>

    )
  }
}

export default withRouter(Login);
