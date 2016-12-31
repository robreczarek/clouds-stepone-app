import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Nav from './Nav';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Recruitment App - Step 1</h2>
          <h4>To get started, enter your email address.</h4>
        </div>
        <Nav />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
