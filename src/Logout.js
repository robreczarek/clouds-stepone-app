import React, { Component } from 'react';
import './Logout.css';

import { hashHistory, browserHistory, Router, Route, Link, withRouter } from 'react-router'

class Logout extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    localStorage.email = '';
    this.props.router.replace('/login');
  }

  render() {
    if (localStorage.email) {
      return (
        <div className="logoutBox">
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Log out" />
          </form>
        </div>
      )
    } else {
      return null
    }

  }
}

export default withRouter(Logout);
