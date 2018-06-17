import * as React from 'react'
import './KeyBoard.css'

export default class KeyBoard extends React.PureComponent {
  componentDidMount() {
    document.addEventListener("keyup", (e) => {
      this.props.makeGuess(e.key)
    })
  }

  renderLetter = (charCode) => {
    const letter = String.fromCharCode(charCode)
    const disabledStatus = this.props.guesses.indexOf(letter) !== -1
    return (
      <button key={charCode} className="keyboard-letter" onClick={() => this.props.makeGuess(letter)} disabled={disabledStatus}>
        <span>{letter.toUpperCase()}</span>
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
