import React, { Component } from 'react';

class OutputTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          { Object.keys(this.props.astronomicalObjects).map((name) => {
            let object = this.props.astronomicalObjects[name];
            return (
              <tr key={ name }>
                <td>{ object.symbol }</td>
                <td>{ name }</td>
                <td>{ this.props.weight * object.weightRatio }</td>
              </tr>
            )
          } ) }
        </tbody>
      </table>
    )
  }
}

export default OutputTable;