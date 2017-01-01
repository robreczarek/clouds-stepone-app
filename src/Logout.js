import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './Logout.css';

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
