import * as React from 'react'

export default function Score(props) {
  if(props.guesses.length === 0) {
    return <p>Make your first guess by typing a letter or clicking any of the above keys.</p>
  }

  return (
    <div>
      <p>Wrong guesses: <b>{props.wrongGuessCount}/6</b></p>
    </div>
  )
}
