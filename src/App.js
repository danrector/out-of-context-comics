import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Out of Context Comics</h1>
        </div>
        <div className="App-pictures">
          <img src={'http://i.imgur.com/Ohuu7bI.jpg?1'} />
          <img src={'http://i.imgur.com/dZoFSAo.jpg?1'} />
          <img src={'http://i.imgur.com/tEQAwsG.jpg?1'} />
        </div>
      </div>
    );
  }
}

export default App;
