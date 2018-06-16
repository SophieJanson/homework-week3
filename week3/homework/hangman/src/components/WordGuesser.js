import * as React from 'react'
import NewGameButton from './NewGameButton'

export default class WordGuesser extends React.PureComponent {
  state = {
    userInput: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target);
    if (this.state.userInput) {
      this.props.makeGuess(this.state.userInput)
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Guess a letter:
          </label>
          <input type="text" name="userInput" value={this.state.userInput} onChange={this.handleChange} maxLength="1" />
          <button type="submit">Guess</button>
        </form>
        <NewGameButton newButtonClickHandler={this.newButtonClickHandler}/>
      </div>
    )
  }
}
