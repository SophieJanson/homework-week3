import * as React from 'react'

export default function NewGameButton(props) {
  return (
    <button className="new_game" onClick={props.newGame}>New Game</button>
  )
}
