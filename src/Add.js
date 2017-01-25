import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { FormsyText } from 'formsy-material-ui/lib';
import Hash from './Hash';

const style = {
  padding: 20,
};

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
      hash: Hash(formData.user_input),
      timestamp: Date.now(),
    };

    tableData.push(input);

    localStorage.setItem('tableData', JSON.stringify(tableData));

    this.props.router.replace('/list?success=true');
  }

  render() {
    return (
      <div className="section-box">
        <h3>Add Record</h3>

        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Paper
            style={style}
          >
            <Formsy.Form
              onValidSubmit={this.handleSubmit}
            >
              <FormsyText
                name="user_input"
                validations={{
                  maxLength: 255,
                  isAlphanumeric: true
                }}
                hintText="Input up to 255 characters"
                floatingLabelText="Add text"
                validationErrors={{
                  maxLength: 'The data you entered is too long',
                  isAlphanumeric: 'The data you entered must be alphanumeric'
                }}
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
