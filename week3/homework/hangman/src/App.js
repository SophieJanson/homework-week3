import React, { Component } from 'react';
import { Route } from 'react-router'
import WelcomeMessage from './components/WelcomeMessage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={WelcomeMessage} />
        </main>
      </div>
    );
  }
}

export default App;
