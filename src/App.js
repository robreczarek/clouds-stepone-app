import React, { Component } from 'react';
import { Link } from 'react-router'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Recruitment App - Step 1</h2>
        </div>
        <p className="App-intro">
          To get started, enter your email address.
        </p>
      </div>
    );
  }
}

export default App;
