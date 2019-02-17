import React, { Component } from 'react';

class OutputTable extends Component {
  render() {
    return (
      <table>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Weight</th>
        </tr>
        { Object.keys(this.props.astronomicalObjects).map((name) => {
          let object = this.props.astronomicalObjects[name];
          return (
            <tr>
              <td>{ object.symbol }</td>
              <td>{ name }</td>
              <td>&nbsp;</td>
            </tr>
          )
        } ) }
      </table>
    )
  }
}

export default OutputTable;