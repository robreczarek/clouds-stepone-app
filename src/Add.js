import React, { Component } from 'react';
import { withRouter } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Add extends Component {

  componentWillMount() {
    if (!localStorage.email) {
      this.props.router.replace('/login');
    }
  }

  render() {
    return (
      <div>
        <h3>Add Record</h3>

        <form>
          <input type="text" />
        </form>
      </div>
    );
  }

}

export default withRouter(Add);
