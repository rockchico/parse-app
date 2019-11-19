// https://www.back4app.com/docs/react/parse-react-sdk
// https://docs.parseplatform.org/js/guide/#queries


import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Parse from 'parse';


Parse.serverURL = 'http://10.200.10.24:1337/parse';
Parse.initialize("TESTE123", "123456");





function App() {
  
  useEffect(() => {      
    getData()
  });
  
  
  async function getData() {
    const GameScore = Parse.Object.extend("GameScore");
    const query = new Parse.Query(GameScore);
    
    //query.equalTo("playerName", "Francisco");
    query.notEqualTo("playerName", "Francisco");


    const results = await query.find();
    console.log("Successfully retrieved " + results.length + " scores.");

    // Do something with the returned Parse.Object values
    for (let i = 0; i < results.length; i++) {
      var object = results[i];
      console.log(object.id + ' - ' + object.get('playerName'));
    }
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={getData}>        Show alert      </button>
      </header>
    </div>
  );
}

export default App;
