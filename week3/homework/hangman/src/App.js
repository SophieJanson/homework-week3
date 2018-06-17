import React, { Component } from 'react';
import { Route } from 'react-router'
import WelcomeMessage from './components/WelcomeMessage'
import GameContainer from './components/GameContainer'
import ScoreContainer from './components/ScoreContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <h1>Hangman</h1>
          <Route exact path="/" component={WelcomeMessage} />
          <Route path="/hangman" component={GameContainer} />
          <Route path="/hangman" component={ScoreContainer} />
        </main>
      </div>
    );
  }
}

export default App;
