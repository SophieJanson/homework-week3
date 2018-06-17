import * as React from 'react'

export default function Score(props) {
  if(props.guesses.length === 0) return <p>Make your first guess by typing a letter or using the above keys.</p>

  return (
    <div className="score-summary">
      <p>Wrong guesses: {props.wrongGuessCount}</p>
    </div>
  )
}
