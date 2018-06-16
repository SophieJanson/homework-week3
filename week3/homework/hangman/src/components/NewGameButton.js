import * as React from 'react'

export default function NewGameButton(props) {
  return (
    <button className="button new_game" onClick={props.newButtonClickHandler}>New Game</button>
  )
}
