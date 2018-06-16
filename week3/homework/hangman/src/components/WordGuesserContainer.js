import * as React from 'react'
import WordGuesser from './WordGuesser'
import NewGameButton from './NewGameButton'
import { makeGuess, newGame } from '../actions/game'
import { connect } from 'react-redux'


class WordGuesserContainer extends React.PureComponent {
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.userInput) {
      this.props.makeGuess(this.state.userInput)
      e.target.reset()
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  newButtonClickHandler = () => {
    this.props.newGame()
  }

  render() {
    return (
      <div>
        <WordGuesser handleSubmit={this.handleSubmit} handleChange={this.handleChange}  />
        <NewGameButton newButtonClickHandler={this.newButtonClickHandler}/>
      </div>
    )
  }
}

export default connect(null, { makeGuess, newGame })(WordGuesserContainer)
