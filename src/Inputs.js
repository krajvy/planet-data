import React, { Component } from 'react';
import InputText from './InputText.js';
import './Inputs.css';

class Inputs extends Component {
  render() {
    return (
      <fieldset className="inputs">
        <legend>Input</legend>
        <InputText
          name="Weight"
          className="weight"
          defaultValue={ this.props.defaultWeight }
          handleWeightChange={ this.props.handleWeightChange }
          handleKeyPress={ this.props.handleKeyPress }
        />
      </fieldset>
    )
  }
}

export default Inputs;