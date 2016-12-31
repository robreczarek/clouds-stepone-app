import React, { Component } from 'react';
import { withRouter } from 'react-router';

class List extends Component {

  componentWillMount() {
    if (!localStorage.email) {
      this.props.router.replace('/login');
    }
  }


  render() {
    return (<div>List</div>);
  }
}

export default withRouter(List);
