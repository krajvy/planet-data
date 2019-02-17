import React, { Component, Fragment } from 'react';

class InputText extends Component {
  render() {
    return (
      <Fragment>
        <label>{ this.props.name }:
          <input
            type="text"
            value={ this.props.value }
          />
        </label>
      </Fragment>
    )
  }
}

export default InputText;