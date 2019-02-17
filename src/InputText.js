import React, { Component, Fragment } from 'react';

class InputText extends Component {
  render() {
    return (
      <Fragment>
        <label>{ this.props.name }:
          <input
            type="number"
            defaultValue={ this.props.defaultValue }
            onChange={ this.props.handleWeightChange }
            onKeyPress={ this.props.handleKeyPress }
          />
        </label>
      </Fragment>
    )
  }
}

export default InputText;