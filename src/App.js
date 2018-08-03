import React, { Component } from 'react';
import './App.css';

import ListOfMovies from './components/ListOfMovies'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prices comparison</h1>
        </header>
        <p className="App-intro">
          Select the movie from the list:
        </p>
        <ListOfMovies />
      </div>
    );
  }
}

export default App;
