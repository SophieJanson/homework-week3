import React, { Component } from 'react';
import { Route } from 'react-router'
import WelcomeMessage from './components/WelcomeMessage'
import WordContainer from './components/WordContainer'
import ScoreContainer from './components/ScoreContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={WelcomeMessage} />
          <Route path="/hangman" component={WordContainer} />
          <Route path="/hangman" component={ScoreContainer} />

        </main>
      </div>
    );
  }
}

export default App;
