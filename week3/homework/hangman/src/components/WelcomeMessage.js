import * as React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomeMessage(props) {
  return(
    <div>
      <p>Hello there!</p>
      <Link to={`./hangman`}><p>Play Game</p></Link>
    </div>
  )
}
