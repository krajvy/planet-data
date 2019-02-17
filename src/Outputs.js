import React, { Component } from 'react';
import OutputTable from './OutputTable.js';

class Outputs extends Component {
  render() {
    return (
      <fieldset>
        <legend>Output</legend>
        <OutputTable
          astronomicalObjects={ this.props.astronomicalObjects }
          weight={ this.props.weight }
        />
      </fieldset>
    )
  }
}

export default Outputs;