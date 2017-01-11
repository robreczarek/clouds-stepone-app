import React, { Component } from 'react';
import { Link } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 2,
    };

    this.handleTabChange = this.handleTabChange.bind(this);

  }

  handleTabChange(index) {
    this.setState({index: index});
  };

  render() {

    if (localStorage.getItem('email')) {
      return (
        <div className="Nav">
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Tabs index={this.state.index} onChange={this.handleTabChange}>
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
