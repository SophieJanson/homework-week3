import * as React from 'react'

export default function Score(props) {
  return (
    <div className="score-summary">
      <p>Wrong guesses: {props.wrongGuessCount}</p>
      <p>Guessed letters: {props.guesses.join(", ")}</p>
    </div>
  )
}
