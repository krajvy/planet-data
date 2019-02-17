import React, { Component } from 'react';
import InputText from './InputText.js';

class Inputs extends Component {
  render() {
    return (
      <fieldset>
        <legend>Input</legend>
        <InputText
          name="Weight"
          defaultValue={ this.props.defaultWeight }
          handleWeightChange={ this.props.handleWeightChange }
          handleKeyPress={ this.props.handleKeyPress }
        />
      </fieldset>
    )
  }
}

export default Inputs;