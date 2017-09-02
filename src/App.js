import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Simple from './Simple.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Look at the spinning cube below</h2>
        <Simple width={600} height={400} />
      </div>
    );
  }
}

export default App;
