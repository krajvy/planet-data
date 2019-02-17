import React, { Component } from 'react';

class InputText extends Component {
  render() {
    return (
      <fragment>
        <label>{ this.props.name }:
          <input type="text" value={ this.props.value }/>
        </label>
      </fragment>
    )
  }
}

export default InputText;