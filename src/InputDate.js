import React, { Component, Fragment } from 'react';
import DatePicker from 'react-date-picker';

class InputDate extends Component {
  render() {
    return (
      <Fragment>
        <label>{ this.props.name }:
          <DatePicker
            clearIcon={ null }
            className={ this.props.className }
            onChange={ this.props.handleChange }
            value={ this.props.defaultValue }
          />
        </label>
      </Fragment>
    )
  }
}

export default InputDate;