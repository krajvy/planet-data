import React, { Component } from 'react';
import OutputTable from './OutputTable.js';
import './Outputs.css';

class Outputs extends Component {
  render() {
    return (
      <fieldset className="outputs">
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