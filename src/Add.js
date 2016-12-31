import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Add extends Component {

  componentWillMount() {
    if (!localStorage.email) {
      this.props.router.replace('/login');
    }
  }

  render() {
    return (<div>Add</div>);
  }

}

export default withRouter(Add);
