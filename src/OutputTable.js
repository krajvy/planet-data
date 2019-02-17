import React, { Component } from 'react';

class OutputTable extends Component {
  roundNumber(number) {
    return number.toFixed(2);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Sym.</th>
            <th>Name</th>
            <th>Weight on surface</th>
          </tr>
        </thead>
        <tbody>
          { Object.keys(this.props.astronomicalObjects).map((name) => {
            let object = this.props.astronomicalObjects[name];
            return (
              <tr key={ name }>
                <td className="symbol">{ object.symbol }</td>
                <td className="name">{ name }</td>
                <td className="number">{ this.roundNumber(this.props.weight * object.weightRatio) }</td>
              </tr>
            )
          } ) }
        </tbody>
      </table>
    )
  }
}

export default OutputTable;