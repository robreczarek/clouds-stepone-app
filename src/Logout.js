import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import './Logout.css';

class Logout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    localStorage.email = '';
    this.props.router.replace('/login');
  }

  submitForm(data) {
    alert(JSON.stringify(data, null, 4));
  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }

  render() {

    if (localStorage.email) {
      return (
        <div className="logoutBox">

          <MuiThemeProvider muiTheme={getMuiTheme()}>
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
