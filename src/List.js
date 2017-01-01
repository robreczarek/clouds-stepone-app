import React, { Component } from 'react';
import { withRouter } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

class List extends Component {

  componentWillMount() {
    if (!localStorage.email) {
      this.props.router.replace('/login');
    }
  }

  render() {
    return (
      <div>
        <h3>List</h3>
        <span className="mdl-badge" data-badge="4">Inbox</span>
      </div>
    );
  }
}

export default withRouter(List);
