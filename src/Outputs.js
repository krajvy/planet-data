import React, { Component } from 'react';
import OutputTable from './OutputTable.js';

class Outputs extends Component {
  render() {
    return (
      <fieldset>
        <legend>Output</legend>
        <OutputTable astronomicalObjects={ this.props.astronomicalObjects }/>
      </fieldset>
    )
  }
}

export default Outputs;