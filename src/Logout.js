import React, { Component } from 'react';
import { withRouter } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle, FormsyAutoComplete } from 'formsy-material-ui/lib';

import './Logout.css';

injectTapEventPlugin();

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
