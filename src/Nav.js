import React, { Component } from 'react';
import { Link } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import './Nav.css';

class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      fixedIndex: 1,
      inverseIndex: 1,
      email: localStorage.getItem('email')
    };

  }

  handleTabChange = (index) => {
    this.setState({index});
  };

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  handleInverseTabChange = (index) => {
    this.setState({inverseIndex: index});
  };

  render() {

    if (this.state.email) {
      return (
        <div className="Nav">
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Tabs index={this.state.inverseIndex} onChange={this.handleInverseTabChange} inverse>
              <Tab value={0} label='Add' containerElement={<Link to="/add" />}></Tab>
              <Tab value={1} label='List' containerElement={<Link to="/list" />}></Tab>
            </Tabs>
          </MuiThemeProvider>
          <div className="Greeting">
            Hello {this.state.email}
          </div>
        </div>
      )
    } else {
      return (null)
    }

  }
}

export default Nav;
