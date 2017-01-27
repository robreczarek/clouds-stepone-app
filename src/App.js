import React, { Component } from 'react';
import Logout from './Logout';
import Nav from './Nav';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Sample Recruitment App</h2>
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
