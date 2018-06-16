import * as React from 'react'
import * as gameLogic from '../lib/game'
import WordGuesser from './WordGuesser'
import { makeGuess } from '../actions/game'
import { connect } from 'react-redux'


class WordGuesserContainer extends React.PureComponent {
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.userInput) {
      this.props.makeGuess(this.state.userInput)
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return <WordGuesser handleSubmit={this.handleSubmit} handleChange={this.handleChange}  />
  }
}

const setStateToProps = (state) => {
  return {
    makeGuess
  }
}

export default connect(setStateToProps, { makeGuess })(WordGuesserContainer)
