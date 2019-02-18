import React, { Component, Fragment } from 'react';

class InputNumber extends Component {
  render() {
    return (
      <Fragment>
        <label>{ this.props.name }:
          <input
            type="number"
            className={ this.props.className }
            defaultValue={ this.props.defaultValue }
            onChange={ this.props.handleChange }
            onKeyPress={ this.props.handleKeyPress }
          />
        </label>
      </Fragment>
    )
  }
}

export default InputNumber;