import React, { Component } from 'react';
import './App.css';
import Inputs from './Inputs.js';
import Outputs from './Outputs.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: 80
    };

    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleWeightChange(event) {
    this.setState({
      weight: event.target.value
    });
  }
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleWeightChange(event);
    }
    event.preventDefault();
  }
  
  render() {
    let astronomicalObjects = {
      Mercury: {
        symbol: '\u263F',
        weightRatio: 0.38,
        orbitalPeriod: 0.24
      },
      Venus: {
        symbol: '\u2640',
        weightRatio: 0.91,
        orbitalPeriod: 0.62
      },
      Earth: {
        symbol: '\u2641',
        weightRatio: 1,
        orbitalPeriod: 1
      },
      Mars: {
        symbol: '\u2642',
        weightRatio: 0.38,
        orbitalPeriod: 1.88
      },
      Jupiter: {
        symbol: '\u2643',
        weightRatio: 2.34,
        orbitalPeriod: 11.86
      },
      Saturn: {
        symbol: '\u2644',
        weightRatio: 1.06,
        orbitalPeriod: 29.46
      },
      Uranus: {
        symbol: '\u2645',
        weightRatio: 0.92,
        orbitalPeriod: 84.01
      },
      Neptune: {
        symbol: '\u2646',
        weightRatio: 1.19,
        orbitalPeriod: 164.8
      }
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1>Your weight on other planets</h1>
        </header>
        <Inputs
          handleWeightChange={ this.handleWeightChange }
          handleKeyPress={ this.handleKeyPress }
          defaultWeight={ 80 }
        />
        <Outputs
          astronomicalObjects={ astronomicalObjects }
          weight={ this.state.weight }
        />
      </div>
    );
  }
}

export default App;
