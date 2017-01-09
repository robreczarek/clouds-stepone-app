import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import './Logout.css';

class Logout extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    localStorage.removeItem('email');
    this.props.router.replace('/login');
  }

  render() {

    if (localStorage.getItem('email')) {
      return (
        <div className="logoutBox">

          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Formsy.Form
              onSubmit={this.handleSubmit}
            >
              <RaisedButton
                type="submit"
                label="Log out"
              />
            </Formsy.Form>
        </MuiThemeProvider>
        </div>
      )
    } else {
      return null
    }

  }
}

export default withRouter(Logout);
