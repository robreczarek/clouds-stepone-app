import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Moment from 'moment';

export default class UserTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: false,
      showCheckboxes: false,
      height: 'inherit',
      tableData: JSON.parse(localStorage.getItem('tableData')) || []
    };
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="Email Address">Email</TableHeaderColumn>
              <TableHeaderColumn tooltip="User Entered Text">Text</TableHeaderColumn>
              <TableHeaderColumn tooltip="Hash Based On User Entered Text">Hash</TableHeaderColumn>
              <TableHeaderColumn tooltip="Date Record Was Create">Date</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.state.tableData.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{row.email}</TableRowColumn>
                <TableRowColumn>{row.text}</TableRowColumn>
                <TableRowColumn>{row.hash}</TableRowColumn>
                <TableRowColumn>{Moment(row.timestamp).format('D MMM YYYY h:mm:ss')}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
