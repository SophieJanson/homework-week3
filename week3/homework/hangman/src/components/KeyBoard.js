import * as React from 'react'
import './KeyBoard.css'

export default class KeyBoard extends React.PureComponent {
  renderLetter = (charCode) => {
    const letter = String.fromCharCode(charCode)
    return <button key={charCode} className="keyboard-letter" onClick={() => this.props.makeGuess(letter)}><span>{letter.toUpperCase()}</span></button>
  }

  render() {
    return (
      <div id="keyboard">
        { Array.from(Array(26).keys(), n => 97 + n).map(this.renderLetter) }
      </div>
    )
  }
}
