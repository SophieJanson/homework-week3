import * as React from 'react'
import * as gameLogic from '../lib/game'
import Word from './Word'
import KeyBoard from './KeyBoard'
import { newGame, makeGuess } from '../actions/game'
import { connect } from 'react-redux'
import './GameContainer.css'

class GameContainer extends React.PureComponent {
  componentDidMount() {
    this.props.newGame()
  }

  maskWord = () => {
    return gameLogic.showGuess(this.props.randomWord, this.props.guesses)
  }

  isWinner = () => {
    return gameLogic.isWinner(this.props.randomWord, this.props.guesses)
  }

  gameFinished = () => {
    return gameLogic.gameFinished(this.props.randomWord, this.props.guesses)
  }

  evaluateGameEndResult = () => {
    return gameLogic.isWinner(this.props.randomWord, this.props.guesses) ? 'Woohoo, amazing, you won!' : 'You lost.'
  }

  render() {
    if (!this.props.randomWord) return <h2>'Getting words from the word universe...'</h2>
    if(gameLogic.gameFinished(this.props.randomWord, this.props.guesses)) {
      return (
        <h2>{this.evaluateGameEndResult() + ` The word was "${this.props.randomWord}"`}</h2>
      )
    }

    return (
      <div className="game">
        <Word randomWord={this.maskWord()} />
        <KeyBoard makeGuess={this.props.makeGuess} guesses={this.props.guesses} />
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

export default connect(setStateToProps, { newGame, makeGuess })(GameContainer)
