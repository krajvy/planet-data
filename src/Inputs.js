import React, { Component } from 'react';
import InputText from './InputText.js';

class Inputs extends Component {
  render() {
    return (
      <fieldset>
        <legend>Input</legend>
        <InputText name="Weight" value="80"/>
      </fieldset>
    )
  }
}

export default Inputs;