import React, { Component } from 'react';
import { Route } from 'react-router'
import WelcomeMessage from './components/WelcomeMessage'
import WordContainer from './components/WordContainer'
import WordGuesserContainer from './components/WordGuesserContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={WelcomeMessage} />
          <Route path="/hangman" component={WordContainer} />
          <Route path="/hangman" component={WordGuesserContainer} />
        </main>
      </div>
    );
  }
}

export default App;
