import * as React from 'react'
import './KeyBoard.css'

export default class KeyBoard extends React.PureComponent {
  componentDidMount() {
    document.addEventListener("keyup", this.keyUpHandler)
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.keyUpHandler)
  }

  keyUpHandler = (e) => {
    if(e.key >= "a" && e.key <= "z") {
      this.makeGuessHandler(e.key)
    }
  }

  makeGuessHandler = (letter) => {
    if(this.props.guesses.indexOf(letter) !== -1) {
      return
    }
    this.props.makeGuess(letter)
  }


  renderLetter = (charCode) => {
    const letter = String.fromCharCode(charCode)
    const disabledStatus = this.props.guesses.indexOf(letter) !== -1
    return (
      <button key={charCode} className="keyboard-letter" onClick={() => this.makeGuessHandler(letter)} disabled={disabledStatus}>
        <span>{letter}</span>
      </button>
    )
  }

  render() {
    return (
      <div id="keyboard">
        { Array.from(Array(26).keys(), n => 97 + n).map(this.renderLetter) }
      </div>
    )
  }
}
