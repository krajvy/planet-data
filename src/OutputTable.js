import React, { Component } from 'react';
import Moment from 'moment';

class OutputTable extends Component {
  roundNumber(number) {
    return number.toFixed(2);
  }

  render() {
    const tillNow = Moment().diff(this.props.date, 'years', true);

    return (
      <table>
        <thead>
          <tr>
            <th>Sym.</th>
            <th>Name</th>
            <th>Weight on surface</th>
            <th>Orbits around the Sun</th>
          </tr>
        </thead>
        <tbody>
          { Object.keys(this.props.astronomicalObjects).map((name) => {
            let object = this.props.astronomicalObjects[name];
            let weight = this.roundNumber(this.props.weight * object.weightRatio);
            let orbits = this.roundNumber(tillNow / object.orbitalPeriod);

            return (
              <tr key={ name }>
                <td className="symbol">{ object.symbol }</td>
                <td className="name">{ name }</td>
                <td className="number">{ weight }</td>
                <td className="number">{ orbits }</td>
              </tr>
            )
          } ) }
        </tbody>
      </table>
    )
  }
}

export default OutputTable;