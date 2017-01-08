import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {indigo50, indigo100, indigo200, indigo300, indigo400, indigo500, indigo600,
  indigo700, indigo800, indigo900, indigoA100, indigoA200, indigoA400, indigoA700} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { FormsyText } from 'formsy-material-ui/lib';

import './Login.css';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo50,
        primary2Color: indigo100,
        primary3Color: indigo200,
        accent1Color: indigo300,
        accent2Color: indigo400,
        accent3Color: indigo500,
        textColor: indigo600,
        alternateTextColor: indigo700,
        canvasColor: indigo800,
        borderColor: indigo900,
        disabledColor: fade(indigoA100, 0.3),
        pickerHeaderColor: indigoA200,
        clockCircleColor: fade(indigoA400, 0.07),
        shadowColor: indigoA700,
    },
});


class Login extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formData) {
    localStorage.setItem('email', formData.email);
    this.props.router.replace('/list');
  }

  render() {
    return (
        <div className="loginBox">
          <h3 className="section-header">
            Login
          </h3>

          <MuiThemeProvider muiTheme={muiTheme}>
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
