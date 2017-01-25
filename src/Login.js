import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { FormsyText } from 'formsy-material-ui/lib';

import './Login.css';

const style = {
  padding: 20,
};

class Login extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (localStorage.getItem('email')) {
      this.props.router.replace('/list');
    }
  }

  handleSubmit(formData) {
    localStorage.setItem('email', formData.email);
    this.props.router.replace('/list');
  }

  render() {
    return (
        <div className="section-box">
          <h3 className="section-header">
            Login
          </h3>

          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Paper
              style={style}
            >
              <Formsy.Form
                onValidSubmit={this.handleSubmit}
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
