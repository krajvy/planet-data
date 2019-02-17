import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
          <fieldset>
            <legend>Input</legend>
            <label for="weight">Weight:</label>
            <input type="text" id="weight"/>
          </fieldset>
          <fieldset>
            <legend>Output</legend>
            <table>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Weight</th>
              </tr>
              { Object.keys(astronomicalObjects).map((name) => {
                let object = astronomicalObjects[name];
                return (
                  <tr>
                    <td>{ object.symbol }</td>
                    <td>{ name }</td>
                    <td>&nbsp;</td>
                  </tr>
                )
              } ) }
            </table>
          </fieldset>
        </header>
      </div>
    );
  }
}

export default App;
