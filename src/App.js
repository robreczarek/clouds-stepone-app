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
          <h4>To get started, enter your email address.</h4>
        </div>
        <div className="App-nav">
          <ul>
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
