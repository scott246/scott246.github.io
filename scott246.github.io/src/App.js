import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Under Construction</h1>
        </header>
        <p className="App-intro">
          Site is temporarily under construction, converting to React! :)
        </p>
      </div>
    );
  }
}

export default App;