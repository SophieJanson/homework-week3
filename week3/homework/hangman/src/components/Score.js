import * as React from 'react'
import './Score.css'

export default function Score(props) {
  if(props.guesses.length === 0) {
    return <p>Make your first guess by typing a letter or clicking any of the above keys.</p>
  }

  return (
    <div className="score-summary">
      <p>Wrong guesses: {props.wrongGuessCount}/6</p>
    </div>
  )
}
