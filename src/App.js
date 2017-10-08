import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//postman request
var request = require("request");

var options = { method: 'GET',
  url: 'https://api.imgur.com/3/album/LVea8/images',
  headers:
   { 'postman-token': 'dabb5d4d-a54b-5792-d996-9008a54d2df8',
     'cache-control': 'no-cache',
     authorization: 'Bearer 27cbb87ca73ffe8376ce68a8e8e180d9c22f24f8' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});



class App extends Component {


//render
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
