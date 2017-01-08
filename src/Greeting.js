import React, { Component } from 'react';

import './Greeting.css';

class Greeting extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: localStorage.getItem('email')
    };

  }

  render() {

    if (this.state.email) {
      return (
        <div className="Greeting">
          Hello {this.state.email}
        </div>
      )
    } else {
      return null
    }

  }
}

export default Greeting;
