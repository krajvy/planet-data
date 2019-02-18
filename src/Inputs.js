import React, { Component } from 'react';
import InputNumber from './InputNumber.js';
import InputDate from './InputDate.js';
import './Inputs.css';

class Inputs extends Component {
  render() {
    return (
      <fieldset className="inputs">
        <legend>Input</legend>
        <InputNumber
          name="Weight"
          className="weight"
          defaultValue={ this.props.defaultWeight }
          handleChange={ this.props.handleWeightChange }
          handleKeyPress={ this.props.handleKeyPress }
        />
        <InputDate
          name="Date of birth"
          className="date"
          defaultValue={ this.props.defaultDate }
          handleChange={ this.props.handleDateChange }
        />
      </fieldset>
    )
  }
}

export default Inputs;