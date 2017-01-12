import React, { Component } from 'react';
import { withRouter } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {Card, CardText} from 'material-ui/Card';

class NotificationAdded extends Component {

  render() {
    if (this.props.location.query.success === "true") {
      return (
        <div className="notification">
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Paper>
              <Card>
                <CardText>
                  Record has been added
                </CardText>
              </Card>
            </Paper>
          </MuiThemeProvider>
        </div>
      )
    } else {
      return null
    }
  }

}

export default withRouter(NotificationAdded);
