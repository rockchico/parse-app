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
    //getData()
    //getData2()
    //getData3()
    //getData4()
    getData5()
  });

  // Relational Queries
  async function getData5() {
    
    var Post = Parse.Object.extend("Post");
    var Comment = Parse.Object.extend("Comment");
    var innerQuery = new Parse.Query(Post);
    innerQuery.exists("body");
    var query = new Parse.Query(Comment);
    query.matchesQuery("post", innerQuery);
    // comments now contains the comments for posts with images.
    const comments = await query.find();


    console.log("getData5 - Relational Queries: " + comments.length);
      
    // Do something with the returned Parse.Object values
    for (let i = 0; i < comments.length; i++) {
      var object = comments[i];
      console.log('# ' + object.id + ' - ' + object.get('updatedAt'));
    }
    

  }
  

  async function getData4() {
    const Product = Parse.Object.extend("Product");
    const query = new Parse.Query(Product);

    // You can sort by weight / rank. ascending() and select()
    query.fullText('name', 'pad');
    query.ascending('price');
    //query.descending('price');
    query.select('price');
    query.find()
    .then(function(results) {
      // results contains a weight / rank in result.get('score')
      console.log("getData4 - Products: " + results.length);
      
      // Do something with the returned Parse.Object values
      for (let i = 0; i < results.length; i++) {
        var object = results[i];
        console.log('# ' + object.id + ' - ' + object.get('price'));
      }

    })
    .catch(function(error) {
      // There was an error.
    });

    

  }

  async function getData3() {
    const Product = Parse.Object.extend("Product");
    const query = new Parse.Query(Product);

    // começa com
    //query.startsWith("name", "Mouse");

    // finaliza com
    //query.endsWith("name", "Pad");

    // texto interiro
    query.fullText('name', 'pad');


    const results = await query.find();

    console.log("getData3 - Products: " + results.length);
      
    // Do something with the returned Parse.Object values
    for (let i = 0; i < results.length; i++) {
      var object = results[i];
      console.log('# ' + object.id + ' - ' + object.get('name'));
    }
    

  }
  
  
  async function getData2() {
    const Product = Parse.Object.extend("Product");
    const query = new Parse.Query(Product);

    // Find objects where the array in arrayKey contains 2.
    //query.equalTo("manufacturer", 54);

    // Find objects where the array in arrayKey contains all of the elements 2, 3, and 4.
    query.containsAll("manufacturer", [54, 12, 78]);

    const results = await query.find();
    console.log("getData2 - Products: " + results.length);
      
    // Do something with the returned Parse.Object values
    for (let i = 0; i < results.length; i++) {
      var object = results[i];
      console.log(object.id + ' - ' + object.get('name'));
      console.log(object.get('manufacturer'));
    }

    
  }
  
  async function getData() {
    const GameScore = Parse.Object.extend("GameScore");
    const query = new Parse.Query(GameScore);
    
    //query.equalTo("playerName", "Francisco");
    //query.notEqualTo("playerName", "Francisco");
    //query.equalTo("score", 1400);
    //query.greaterThan("score", 1400);
    
    // Sorts the results in ascending order by the score field
    //query.ascending("score");

    // Sorts the results in descending order by the score field
    //query.descending("score");

    // Finds scores from any of Jonathan, Dario, or Shawn
    //query.containedIn("playerName", ["Francisco", "Dario Wunsch", "Shawn Simon"]);

    // Finds scores from anyone who is neither Jonathan, Dario, nor Shawn
    //query.notContainedIn("playerName", ["Francisco", "Dario Wunsch", "Shawn Simon"]);

    // Finds objects that have the score set
    //query.exists("score");

    // Finds objects that don't have the score set
    //query.doesNotExist("score");

    query.select("score", "playerName");
    query.find().then(function(results) {
      // each of results will only have the selected fields available.
      console.log("Resultados: ")
      console.log(results)
    });





    



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