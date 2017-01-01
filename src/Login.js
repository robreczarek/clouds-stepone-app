import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle, FormsyAutoComplete } from 'formsy-material-ui/lib';

import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    localStorage.email = event.target.email;
    this.props.router.replace('/list');
  }

  render() {
    return (
        <div className="loginBox">
          <h3 className="section-header">
            Login
          </h3>

          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Paper>
              <Formsy.Form
                onSubmit={this.handleSubmit}
              >
                <FormsyText
                  floatingLabelText="Email address"
                  hintText="Please enter a valid email address"
                  name="email"
                  validationErrors={{
                      isEmail: 'This doesn’t look like a valid email address.'
                  }}
                  validations="isEmail"
                  required
                />
                <RaisedButton
                  type="submit"
                  label="Submit"
                />
              </Formsy.Form>
            </Paper>
          </MuiThemeProvider>
        </div>
    )
  }
}

export default withRouter(Login);
