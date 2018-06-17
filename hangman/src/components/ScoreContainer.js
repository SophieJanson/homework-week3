import * as React from 'react'
import * as gameLogic from '../lib/game'
import Score from './Score'
import NewGameButton from './NewGameButton'
import { newGame } from '../actions/game'
import { connect } from 'react-redux'
import './ScoreContainer.css'


class ScoreContainer extends React.PureComponent {
  getWrongGuesses = () => {
    return gameLogic.wrongGuessCount(this.props.randomWord, this.props.guesses)
  }

  render() {
    return (
      <div className="score-summary">
        <Score wrongGuessCount={this.getWrongGuesses()} guesses={this.props.guesses}/>
        <NewGameButton newGame={this.props.newGame}/>
      </div>
    )
  }
}

const setStateToProps = (state) => {
  return {
    state,
    randomWord: state.game.randomWord,
    guesses: state.game.guesses
  }
}

export default connect(setStateToProps, { newGame })(ScoreContainer)
