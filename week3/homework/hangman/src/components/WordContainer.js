import * as React from 'react'
import * as gameLogic from '../lib/game'
import Word from './Word'
import WordGuesser from './WordGuesser'
import { newGame, makeGuess } from '../actions/game'
import { connect } from 'react-redux'


class WordContainer extends React.PureComponent {
  componentDidMount() {
    this.props.newGame()
    console.log(this.props.randomWord);
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
    return gameLogic.isWinner(this.props.randomWord, this.props.guesses) ? 'Woohoo, you are amazing! You Won!' : 'You lost.'
  }

  render() {
    if (!this.props.randomWord) return <h2>'Getting words from the word universe...'</h2>

    if(gameLogic.gameFinished(this.props.randomWord, this.props.guesses)) {
      return (
        <h2>{this.evaluateGameEndResult()}</h2>
      )
    }
    return (
      <div className="game">
        <h1>HANGMAN</h1>
        <Word randomWord={this.maskWord()} />
        <WordGuesser makeGuess={this.props.makeGuess} newGame={this.props.newGame} />
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

export default connect(setStateToProps, { newGame, makeGuess })(WordContainer)
