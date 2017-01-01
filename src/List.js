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

class List extends Component {

  componentWillMount() {
    if (!localStorage.email) {
      this.props.router.replace('/login');
    }
  }

  render() {

    return (
      <div>
        <h3>List</h3>

        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Paper>
            <Formsy.Form
            >
              <FormsyText
                name="name"
                validations="isWords"
                required
                hintText="What is your name?"
                floatingLabelText="Name"
              />
              <RaisedButton
                type="submit"
                label="Submit"
              />
            </Formsy.Form>
          </Paper>
        </MuiThemeProvider>
      </div>
    );

  }
}

export default withRouter(List);
