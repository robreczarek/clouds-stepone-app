import React, { Component } from 'react';
import { Link } from 'react-router';

import Greeting from './Greeting';

import './Nav.css';

class Nav extends Component {

  render() {
    return (
      <div className="Nav">
        <ul>
          <li><Link to="/add">Add</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>

        <Greeting />
      </div>
    );
  }
}

export default Nav;
