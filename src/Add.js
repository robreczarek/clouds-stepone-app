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

class Add extends Component {

  componentWillMount() {
    if (!localStorage.email) {
      this.props.router.replace('/login');
    }
  }

  render() {
    return (
      <div>
        <h3>Add Record</h3>

        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Paper>
            <Formsy.Form
            >
              <FormsyText
                name="user_input"
                validations="isWords"
                required
                hintText="Add some text"
                floatingLabelText="Input"
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

export default withRouter(Add);
