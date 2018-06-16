import * as React from 'react'

export default function NewGameButton(props) {
  return (
    <button className="new-game-button" onClick={props.newButtonClickHandler}>New Game</button>
  )
}
