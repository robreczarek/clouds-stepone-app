import React, { Component } from 'react';
import { withRouter } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserTable from './UserTable'

class List extends Component {

  componentWillMount() {
    if (!localStorage.getItem('email')) {
      this.props.router.replace('/login');
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <UserTable />
        </MuiThemeProvider>
      </div>
    );
  }

}

export default withRouter(List);
