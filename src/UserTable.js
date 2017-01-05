import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    email: 'robert@obreczarek.com',
    text: 'Not all who wander are lost',
    hash: '',
    timestamp: Date.now(),
  },{
    email: 'joormotha@gmail.com',
    text: 'What doesn\'t kill you makes you stronger',
    hash: '',
    timestamp: Date.now(),
  },
  {
    email: 'httpworkshop@yahoo.com',
    text: 'Fear is the mind killer',
    hash: '',
    timestamp: Date.now(),
  },{
    email: 'rob@needanative.com',
    text: 'Perfect is the enemy of done',
    hash: '',
    timestamp: Date.now(),
  },



];

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
            {tableData.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{row.email}</TableRowColumn>
                <TableRowColumn>{row.text}</TableRowColumn>
                <TableRowColumn>{row.hash}</TableRowColumn>
                <TableRowColumn>{row.timestamp}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
