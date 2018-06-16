import * as React from 'react'
import * as gameLogic from '../lib/game'
import Word from './Word'
import { newGame } from '../actions/game'
import { connect } from 'react-redux'


class WordContainer extends React.PureComponent {
  componentDidMount() {
    this.props.newGame()
    console.log(this.props.randomWord);
  }

  hideWord = () => {
    return gameLogic.showGuess(this.props.randomWord, this.props.guesses)
  }

  render() {
    if (!this.props.randomWord) return 'Getting words from the word universe...'
    return <Word randomWord={this.hideWord()} />
  }
}

const setStateToProps = (state) => {
  return {
    state,
    randomWord: state.game.randomWord,
    guesses: state.game.guesses
  }
}

export default connect(setStateToProps, { newGame })(WordContainer)
