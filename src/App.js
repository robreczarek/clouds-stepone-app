import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './logo.svg';
import './App.css';

import Logout from './Logout';
import Nav from './Nav';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Recruitment App - Step 1</h2>
        </div>
        <Nav />
        <Logout />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
