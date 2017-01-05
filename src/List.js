import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import UserTable from './UserTable'

class List extends Component {

  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    if (!localStorage.email) {
      this.props.router.replace('/login');
    }
  }

  submitForm() {
      this.props.router.replace('/add');
  }

  render() {
//hash, input, userEmail, creationDate
    return (
      <div>
        <h3>List</h3>

        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Formsy.Form
            onSubmit={this.submitForm}
          >
            <RaisedButton
              type="submit"
              label="Add"
            />
          </Formsy.Form>
        </MuiThemeProvider>

        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <UserTable />
        </MuiThemeProvider>

      </div>
    );

  }
}

export default withRouter(List);
