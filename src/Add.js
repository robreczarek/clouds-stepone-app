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

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (!localStorage.getItem('email')) {
      this.props.router.replace('/login');
    }
  }

  handleSubmit(formData) {

    let tableData = JSON.parse(localStorage.getItem('tableData')) || [];

    let input = {
      email: localStorage.getItem('email'),
      text: formData.user_input,
      hash: formData.user_input,
      timestamp: Date.now(),
    };

    tableData.push(input);

    localStorage.setItem('tableData', JSON.stringify(tableData));

    this.props.router.replace('/list');
  }

  render() {
    return (
      <div>
        <h3>Add Record</h3>

        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Paper>
            <Formsy.Form
              onSubmit={this.handleSubmit}
            >
              <FormsyText
                name="user_input"
                validations="isAlphanumeric,minLength:1,maxLength:255"
                required
                hintText="Input up to 255 characters"
                floatingLabelText="Add text"
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
