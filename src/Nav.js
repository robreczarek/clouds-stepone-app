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
      index: 2,
      fixedIndex: 1,
      inverseIndex: 1,
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

    if (localStorage.getItem('email')) {
      return (
        <div className="Nav">
          <div className="Greeting">
            Hello {localStorage.getItem('email')}
          </div>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Tabs onChange={this.handleInverseTabChange}>
              <Tab value={0} label='Add' containerElement={<Link to="/add" />}></Tab>
              <Tab value={1} label='List' containerElement={<Link to="/list" />}></Tab>
            </Tabs>
          </MuiThemeProvider>
        </div>
      )
    } else {
      return (null)
    }

  }
}

export default Nav;
